from dotenv import load_dotenv
from pathlib import Path
import os
import uuid
import logging
import bcrypt
import jwt
import re

from datetime import datetime, timezone, timedelta
from typing import List, Optional

from fastapi import (
    FastAPI,
    APIRouter,
    HTTPException,
    Depends,
    File,
    UploadFile,
    Form,
)
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr


# =========================================================
# ENVIRONMENT
# =========================================================

ROOT_DIR = Path(__file__).parent

load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
JWT_SECRET = os.environ["JWT_SECRET"]

JWT_ALGORITHM = "HS256"

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]


# =========================================================
# APP
# =========================================================

app = FastAPI(
    title="HANEULZ API",
    version="1.0.0"
)

api_router = APIRouter(prefix="/api")

security = HTTPBearer()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# =========================================================
# STATIC UPLOADS
# =========================================================

STATIC_DIR = ROOT_DIR / "static"
UPLOAD_DIR = STATIC_DIR / "uploads"

STATIC_DIR.mkdir(
    parents=True,
    exist_ok=True
)

UPLOAD_DIR.mkdir(
    parents=True,
    exist_ok=True
)

app.mount(
    "/static",
    StaticFiles(directory=STATIC_DIR),
    name="static"
)


# =========================================================
# HELPERS
# =========================================================

def now_iso() -> str:
    return datetime.now(
        timezone.utc
    ).isoformat()


def youtube_thumbnail(url: str) -> Optional[str]:

    if not url:
        return None

    patterns = [
        r"(?:youtube\.com/watch\?v=)([^&\s]+)",
        r"(?:youtu\.be/)([^?\s]+)",
        r"(?:youtube\.com/embed/)([^?\s]+)",
        r"(?:youtube\.com/shorts/)([^?\s]+)",
    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            url
        )

        if match:

            video_id = match.group(1)

            return (
                "https://img.youtube.com/vi/"
                f"{video_id}/maxresdefault.jpg"
            )

    return None


async def save_image(
    image: Optional[UploadFile]
) -> Optional[str]:

    if image is None:
        return None

    if not image.filename:
        return None

    extension = Path(
        image.filename
    ).suffix.lower()

    allowed_extensions = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
        ".gif"
    }

    if extension not in allowed_extensions:
        extension = ".jpg"

    filename = (
        f"{uuid.uuid4()}"
        f"{extension}"
    )

    file_path = (
        UPLOAD_DIR / filename
    )

    contents = await image.read()

    with open(
        file_path,
        "wb"
    ) as buffer:
        buffer.write(contents)

    return (
        f"/static/uploads/{filename}"
    )


def hash_password(
    password: str
) -> str:

    return bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")


def verify_password(
    password: str,
    hashed: str
) -> bool:

    return bcrypt.checkpw(
        password.encode("utf-8"),
        hashed.encode("utf-8")
    )


def create_access_token(
    user_id: str,
    email: str
) -> str:

    payload = {
        "sub": user_id,
        "email": email,
        "exp": (
            datetime.now(timezone.utc)
            + timedelta(days=7)
        )
    }

    return jwt.encode(
        payload,
        JWT_SECRET,
        algorithm=JWT_ALGORITHM
    )


def clean_document(document):

    if document is None:
        return None

    document.pop(
        "_id",
        None
    )

    return document


# =========================================================
# AUTH
# =========================================================

class LoginInput(BaseModel):

    email: EmailStr
    password: str


async def get_current_admin(
    credentials: HTTPAuthorizationCredentials = Depends(
        security
    )
):

    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            JWT_SECRET,
            algorithms=[JWT_ALGORITHM]
        )

        email = payload.get("email")

        if not email:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        user = await db.users.find_one(
            {
                "email": email.lower()
            }
        )

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Admin account not found"
            )

        if user.get("role") != "admin":
            raise HTTPException(
                status_code=403,
                detail="Admin access required"
            )

        return payload

    except jwt.ExpiredSignatureError:

        raise HTTPException(
            status_code=401,
            detail="Token expired"
        )

    except jwt.InvalidTokenError:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )


# =========================================================
# AU MODELS
# =========================================================

class AU(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    title: str

    author_name: str = "Anonymous"

    short_description: str = ""

    full_story: str = ""

    cover_image_url: Optional[str] = None

    source_url: Optional[str] = None

    tags: List[str] = Field(
        default_factory=list
    )

    au_type: str = "story"

    source: str = "other"

    status: str = "pending"

    likes: int = 0

    featured: bool = False

    bookmarked: int = 0

    created_at: str = Field(
        default_factory=now_iso
    )

    updated_at: str = Field(
        default_factory=now_iso
    )


class CommentCreate(BaseModel):

    author_name: str = "Anonymous"

    text: str


class Comment(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    au_id: str

    author_name: str = "Anonymous"

    text: str

    status: str = "pending"

    created_at: str = Field(
        default_factory=now_iso
    )


# =========================================================
# AU SUBMISSION
# =========================================================

@api_router.post(
    "/aus",
    response_model=AU
)
async def submit_au(

    title: str = Form(...),

    author_name: str = Form("Anonymous"),

    short_description: str = Form(""),

    full_story: str = Form(""),

    source_url: str = Form(""),

    au_type: str = Form("story"),

    source: str = Form("other"),

    tags: str = Form(""),

    image: Optional[UploadFile] = File(None)

):

    title = title.strip()

    if not title:

        raise HTTPException(
            status_code=400,
            detail="Title is required"
        )

    parsed_tags = []

    if tags:

        parsed_tags = [
            tag.strip()
            for tag in tags.split(",")
            if tag.strip()
        ]

    cover_image = None

    if image:

        cover_image = await save_image(
            image
        )

    au = AU(

        title=title,

        author_name=(
            author_name.strip()
            or "Anonymous"
        ),

        short_description=(
            short_description.strip()
        ),

        full_story=full_story,

        source_url=(
            source_url.strip()
            or None
        ),

        tags=parsed_tags,

        au_type=(
            au_type.strip()
            or "story"
        ),

        source=(
            source.strip()
            or "other"
        ),

        status="pending",

        cover_image_url=cover_image

    )

    await db.aus.insert_one(
        au.model_dump()
    )

    return au


# =========================================================
# PUBLIC AU LIST
# =========================================================

@api_router.get(
    "/aus",
    response_model=List[AU]
)
async def list_aus(

    au_type: Optional[str] = None,

    source: Optional[str] = None

):

    query = {
        "status": "approved"
    }

    if au_type:
        query["au_type"] = au_type

    if source:
        query["source"] = source

    docs = await db.aus.find(
        query,
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return docs


# =========================================================
# SINGLE PUBLIC AU
# =========================================================

@api_router.get(
    "/aus/{au_id}",
    response_model=AU
)
async def get_au(
    au_id: str
):

    doc = await db.aus.find_one(
        {
            "id": au_id,
            "status": "approved"
        },
        {
            "_id": 0
        }
    )

    if not doc:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    return doc


# =========================================================
# LIKE AU
# =========================================================

@api_router.post(
    "/aus/{au_id}/like"
)
async def like_au(
    au_id: str
):

    result = await db.aus.update_one(

        {
            "id": au_id,
            "status": "approved"
        },

        {
            "$inc": {
                "likes": 1
            }
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    doc = await db.aus.find_one(
        {
            "id": au_id
        },
        {
            "_id": 0
        }
    )

    return {
        "likes": doc.get(
            "likes",
            0
        )
    }


# =========================================================
# COMMENTS
# =========================================================

@api_router.post(
    "/aus/{au_id}/comments",
    response_model=Comment
)
async def submit_comment(

    au_id: str,

    input: CommentCreate

):

    au = await db.aus.find_one(
        {
            "id": au_id,
            "status": "approved"
        }
    )

    if not au:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    comment = Comment(

        au_id=au_id,

        author_name=(
            input.author_name.strip()
            or "Anonymous"
        ),

        text=input.text.strip(),

        status="pending"

    )

    await db.comments.insert_one(
        comment.model_dump()
    )

    return comment


@api_router.get(
    "/aus/{au_id}/comments"
)
async def get_comments(
    au_id: str
):

    docs = await db.comments.find(
        {
            "au_id": au_id,
            "status": "approved"
        },
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return docs


# =========================================================
# ADMIN AU LIST
# =========================================================

@api_router.get(
    "/admin/aus",
    response_model=List[AU]
)
async def admin_list_aus(

    status: Optional[str] = None,

    admin: dict = Depends(
        get_current_admin
    )

):

    query = {}

    if status:
        query["status"] = status

    docs = await db.aus.find(
        query,
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(1000)

    return docs


# =========================================================
# ADMIN AU STATUS
# =========================================================

@api_router.patch(
    "/admin/aus/{au_id}"
)
async def admin_update_au(

    au_id: str,

    body: dict,

    admin: dict = Depends(
        get_current_admin
    )

):

    new_status = body.get(
        "status"
    )

    if new_status not in {
        "approved",
        "rejected",
        "pending"
    }:

        raise HTTPException(
            status_code=400,
            detail="Invalid status"
        )

    result = await db.aus.update_one(

        {
            "id": au_id
        },

        {
            "$set": {
                "status": new_status,
                "updated_at": now_iso()
            }
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    return {
        "ok": True,
        "id": au_id,
        "status": new_status
    }


# =========================================================
# ADMIN EDIT AU
# =========================================================

@api_router.put(
    "/admin/aus/{au_id}",
    response_model=AU
)
async def admin_edit_au(

    au_id: str,

    title: str = Form(...),

    author_name: str = Form("Anonymous"),

    short_description: str = Form(""),

    full_story: str = Form(""),

    source_url: str = Form(""),

    au_type: str = Form("story"),

    source: str = Form("other"),

    tags: str = Form(""),

    image: Optional[UploadFile] = File(None),

    admin: dict = Depends(
        get_current_admin
    )

):

    parsed_tags = []

    if tags:

        parsed_tags = [
            tag.strip()
            for tag in tags.split(",")
            if tag.strip()
        ]

    data = {

        "title": title.strip(),

        "author_name": (
            author_name.strip()
            or "Anonymous"
        ),

        "short_description": (
            short_description.strip()
        ),

        "full_story": full_story,

        "source_url": (
            source_url.strip()
            or None
        ),

        "au_type": (
            au_type.strip()
            or "story"
        ),

        "source": (
            source.strip()
            or "other"
        ),

        "tags": parsed_tags,

        "updated_at": now_iso()

    }

    if image:

        uploaded_image = await save_image(
            image
        )

        if uploaded_image:

            data[
                "cover_image_url"
            ] = uploaded_image

    result = await db.aus.update_one(

        {
            "id": au_id
        },

        {
            "$set": data
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    updated = await db.aus.find_one(
        {
            "id": au_id
        },
        {
            "_id": 0
        }
    )

    return updated


# =========================================================
# ADMIN DELETE AU
# =========================================================

@api_router.delete(
    "/admin/aus/{au_id}"
)
async def admin_delete_au(

    au_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    result = await db.aus.delete_one(
        {
            "id": au_id
        }
    )

    await db.comments.delete_many(
        {
            "au_id": au_id
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )

    return {
        "ok": True
    }


# =========================================================
# ADMIN COMMENTS
# =========================================================

@api_router.get(
    "/admin/comments",
    response_model=List[Comment]
)
async def admin_list_comments(

    status: Optional[str] = None,

    admin: dict = Depends(
        get_current_admin
    )

):

    query = {}

    if status:
        query["status"] = status

    docs = await db.comments.find(
        query,
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(1000)

    return docs


@api_router.patch(
    "/admin/comments/{comment_id}"
)
async def admin_update_comment(

    comment_id: str,

    body: dict,

    admin: dict = Depends(
        get_current_admin
    )

):

    new_status = body.get(
        "status"
    )

    if new_status not in {
        "approved",
        "rejected",
        "pending"
    }:

        raise HTTPException(
            status_code=400,
            detail="Invalid status"
        )

    result = await db.comments.update_one(

        {
            "id": comment_id
        },

        {
            "$set": {
                "status": new_status
            }
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Comment not found"
        )

    return {
        "ok": True,
        "status": new_status
    }


@api_router.delete(
    "/admin/comments/{comment_id}"
)
async def admin_delete_comment(

    comment_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    result = await db.comments.delete_one(
        {
            "id": comment_id
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Comment not found"
        )

    return {
        "ok": True
    }


# =========================================================
# VARIETY
# =========================================================

class Variety(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    section: str

    category: str = ""

    show_name: str

    label: str = ""

    episode: str = ""

    description: str = ""

    thumbnail: Optional[str] = None

    youtube_url: str = ""

    air_date: str = ""

    featured: bool = False

    created_at: str = Field(
        default_factory=now_iso
    )

    updated_at: str = Field(
        default_factory=now_iso
    )


@api_router.get(
    "/variety",
    response_model=List[Variety]
)
async def list_variety():

    docs = await db.variety.find(
        {},
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return docs


@api_router.post(
    "/admin/variety",
    response_model=Variety
)
async def admin_create_variety(

    section: str = Form(...),

    category: str = Form(""),

    show_name: str = Form(...),

    label: str = Form(""),

    episode: str = Form(""),

    description: str = Form(""),

    youtube_url: str = Form(""),

    air_date: str = Form(""),

    image: Optional[UploadFile] = File(None),

    admin: dict = Depends(
        get_current_admin
    )

):

    thumbnail = None

    if image:

        thumbnail = await save_image(
            image
        )

    elif youtube_url:

        thumbnail = youtube_thumbnail(
            youtube_url
        )

    variety = Variety(

        section=section,

        category=category,

        show_name=show_name,

        label=label,

        episode=episode,

        description=description,

        thumbnail=thumbnail,

        youtube_url=youtube_url,

        air_date=air_date

    )

    await db.variety.insert_one(
        variety.model_dump()
    )

    return variety


@api_router.put(
    "/admin/variety/{variety_id}",
    response_model=Variety
)
async def admin_update_variety(

    variety_id: str,

    section: str = Form(...),

    category: str = Form(""),

    show_name: str = Form(...),

    label: str = Form(""),

    episode: str = Form(""),

    description: str = Form(""),

    youtube_url: str = Form(""),

    air_date: str = Form(""),

    image: Optional[UploadFile] = File(None),

    admin: dict = Depends(
        get_current_admin
    )

):

    data = {

        "section": section,

        "category": category,

        "show_name": show_name,

        "label": label,

        "episode": episode,

        "description": description,

        "youtube_url": youtube_url,

        "air_date": air_date,

        "updated_at": now_iso()

    }

    if image:

        data[
            "thumbnail"
        ] = await save_image(
            image
        )

    elif youtube_url:

        data[
            "thumbnail"
        ] = youtube_thumbnail(
            youtube_url
        )

    result = await db.variety.update_one(

        {
            "id": variety_id
        },

        {
            "$set": data
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Variety video not found"
        )

    return await db.variety.find_one(
        {
            "id": variety_id
        },
        {
            "_id": 0
        }
    )


@api_router.delete(
    "/admin/variety/{variety_id}"
)
async def admin_delete_variety(

    variety_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    result = await db.variety.delete_one(
        {
            "id": variety_id
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Variety video not found"
        )

    return {
        "ok": True
    }


# =========================================================
# FAN POSTS
# =========================================================

class FanPost(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    category: str

    platform: str

    thumbnail: str

    url: str

    caption: str = ""

    created_at: str = Field(
        default_factory=now_iso
    )


class FanPostCreate(BaseModel):

    category: str

    platform: str

    thumbnail: str

    url: str

    caption: str = ""


@api_router.get(
    "/fanposts/{category}"
)
async def get_fan_posts(
    category: str
):

    return await db.fanposts.find(
        {
            "category": category
        },
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)


@api_router.post(
    "/admin/fanposts",
    response_model=FanPost
)
async def admin_create_fan_post(

    input: FanPostCreate,

    admin: dict = Depends(
        get_current_admin
    )

):

    post = FanPost(
        **input.model_dump()
    )

    await db.fanposts.insert_one(
        post.model_dump()
    )

    return post


@api_router.delete(
    "/admin/fanposts/{post_id}"
)
async def admin_delete_fan_post(

    post_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    await db.fanposts.delete_one(
        {
            "id": post_id
        }
    )

    return {
        "ok": True
    }


# =========================================================
# PLAYLIST
# =========================================================

class PlaylistItem(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    playlist: str

    title: str

    platform: str

    thumbnail: Optional[str] = None

    description: str = ""

    url: str

    created_at: str = Field(
        default_factory=now_iso
    )

    updated_at: str = Field(
        default_factory=now_iso
    )


class PlaylistItemCreate(BaseModel):

    playlist: str

    title: str

    platform: str

    thumbnail: Optional[str] = None

    url: str


@api_router.get(
    "/playlists/{playlist}"
)
async def get_playlist(
    playlist: str
):

    return await db.playlists.find(
        {
            "playlist": playlist
        },
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)


@api_router.post(
    "/admin/playlists",
    response_model=PlaylistItem
)
async def admin_add_playlist_item(

    input: PlaylistItemCreate,

    admin: dict = Depends(
        get_current_admin
    )

):

    item = PlaylistItem(
        **input.model_dump()
    )

    await db.playlists.insert_one(
        item.model_dump()
    )

    return item


@api_router.delete(
    "/admin/playlists/{item_id}"
)
async def admin_delete_playlist_item(

    item_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    await db.playlists.delete_one(
        {
            "id": item_id
        }
    )

    return {
        "ok": True
    }


# =========================================================
# GAMES
# =========================================================

class Game(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    title: str

    description: str

    thumbnail: Optional[str] = None

    game_url: str

    category: str = "quiz"

    created_at: str = Field(
        default_factory=now_iso
    )

    updated_at: str = Field(
        default_factory=now_iso
    )


class GameCreate(BaseModel):

    title: str

    description: str

    thumbnail: Optional[str] = None

    game_url: str

    category: str = "quiz"


@api_router.get(
    "/games",
    response_model=List[Game]
)
async def get_games():

    return await db.games.find(
        {},
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)


@api_router.post(
    "/admin/games",
    response_model=Game
)
async def admin_create_game(

    input: GameCreate,

    admin: dict = Depends(
        get_current_admin
    )

):

    game = Game(
        **input.model_dump()
    )

    await db.games.insert_one(
        game.model_dump()
    )

    return game


@api_router.put(
    "/admin/games/{game_id}",
    response_model=Game
)
async def admin_update_game(

    game_id: str,

    input: GameCreate,

    admin: dict = Depends(
        get_current_admin
    )

):

    data = input.model_dump()

    data["updated_at"] = now_iso()

    result = await db.games.update_one(

        {
            "id": game_id
        },

        {
            "$set": data
        }

    )

    if result.matched_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )

    return await db.games.find_one(
        {
            "id": game_id
        },
        {
            "_id": 0
        }
    )


@api_router.delete(
    "/admin/games/{game_id}"
)
async def admin_delete_game(

    game_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    result = await db.games.delete_one(
        {
            "id": game_id
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )

    return {
        "ok": True
    }


# =========================================================
# MEMORY CARDS
# =========================================================

class MemoryCard(BaseModel):

    id: str = Field(
        default_factory=lambda: str(uuid.uuid4())
    )

    title: str

    image: str

    created_at: str = Field(
        default_factory=now_iso
    )


@api_router.get(
    "/memory-cards"
)
async def get_memory_cards():

    return await db.memory_cards.find(
        {},
        {
            "_id": 0
        }
    ).sort(
        "created_at",
        -1
    ).to_list(500)


@api_router.post(
    "/admin/memory-cards"
)
async def admin_add_memory_card(

    title: str = Form(...),

    image: UploadFile = File(...),

    admin: dict = Depends(
        get_current_admin
    )

):

    image_url = await save_image(
        image
    )

    if not image_url:

        raise HTTPException(
            status_code=400,
            detail="Image upload failed"
        )

    card = MemoryCard(
        title=title,
        image=image_url
    )

    await db.memory_cards.insert_one(
        card.model_dump()
    )

    return card


@api_router.delete(
    "/admin/memory-cards/{card_id}"
)
async def admin_delete_memory_card(

    card_id: str,

    admin: dict = Depends(
        get_current_admin
    )

):

    result = await db.memory_cards.delete_one(
        {
            "id": card_id
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=404,
            detail="Memory card not found"
        )

    return {
        "ok": True
    }


# =========================================================
# SETTINGS
# =========================================================

class SiteSettings(BaseModel):

    hero_title: str = "HANEULZ CORNER"

    hero_subtitle: str = (
        "Your cozy space for all things AHOF & Haneulz"
    )

    whole_group_title: str = (
        "NOW, THE WHOLE GROUP"
    )

    whole_group_desc: str = (
        "Spotlighting all nine members of AHOF together."
    )

    about_title: str = "Our Little Corner"

    about_subtitle: str = (
        "Welcome to Haneulz Corner ☁️💗"
    )

    about_letter: str = (
        "Haneulz Corner started as a simple idea "
        "from one Hansum who just wanted a place "
        "where everything about HANEULZ could be "
        "found a little more easily."
    )

    about_signoff_text: str = (
        "Made with lots of love, late-night ideas, "
        "and a few too many bookmarks."
    )

    about_signoff_author: str = (
        "— K ☁️💗"
    )


@api_router.get(
    "/settings"
)
async def get_settings():

    settings = await db.settings.find_one(
        {
            "_id": "site_content"
        },
        {
            "_id": 0
        }
    )

    if settings:
        return settings

    defaults = SiteSettings().model_dump()

    await db.settings.update_one(

        {
            "_id": "site_content"
        },

        {
            "$set": defaults
        },

        upsert=True

    )

    return defaults


@api_router.post(
    "/admin/settings"
)
async def update_settings(

    settings: SiteSettings,

    admin: dict = Depends(
        get_current_admin
    )

):

    data = settings.model_dump()

    await db.settings.update_one(

        {
            "_id": "site_content"
        },

        {
            "$set": data
        },

        upsert=True

    )

    return {
        "message": "Settings updated successfully",
        "settings": data
    }


# =========================================================
# UPLOAD THUMBNAIL
# =========================================================

@api_router.post(
    "/upload-thumbnail"
)
async def upload_thumbnail(

    file: UploadFile = File(...),

    admin: dict = Depends(
        get_current_admin
    )

):

    image_url = await save_image(
        file
    )

    if not image_url:

        raise HTTPException(
            status_code=400,
            detail="Image upload failed"
        )

    return {
        "url": image_url
    }


# =========================================================
# AUTH ROUTES
# =========================================================

@api_router.post(
    "/auth/login"
)
async def login(
    input: LoginInput
):

    email = input.email.lower()

    user = await db.users.find_one(
        {
            "email": email
        }
    )

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        input.password,
        user["password_hash"]
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token(
        user["id"],
        user["email"]
    )

    return {

        "token": token,

        "user": {

            "email": user["email"],

            "name": user.get(
                "name",
                "Admin"
            ),

            "role": user.get(
                "role",
                "admin"
            )

        }

    }


@api_router.get(
    "/auth/me"
)
async def me(
    admin: dict = Depends(
        get_current_admin
    )
):

    return admin


# =========================================================
# ROOT
# =========================================================

@api_router.get("/")
async def root():

    return {
        "message": "HANEULZ API",
        "status": "online"
    }


# =========================================================
# INCLUDE ROUTER
# =========================================================

app.include_router(
    api_router
)


# =========================================================
# CORS
# =========================================================

cors_origins = os.environ.get(
    "CORS_ORIGINS",
    "*"
)

if cors_origins.strip() == "*":

    allowed_origins = ["*"]

else:

    allowed_origins = [
        origin.strip()
        for origin in cors_origins.split(",")
        if origin.strip()
    ]


app.add_middleware(

    CORSMiddleware,

    allow_origins=allowed_origins,

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)


# =========================================================
# DATABASE STARTUP
# =========================================================

async def seed():

    admin_email = os.environ.get(
        "ADMIN_EMAIL",
        "admin@haneulz.com"
    ).lower()

    admin_password = os.environ.get(
        "ADMIN_PASSWORD",
        "haneulz2025"
    )

    existing = await db.users.find_one(
        {
            "email": admin_email
        }
    )

    if existing is None:

        await db.users.insert_one({

            "id": str(uuid.uuid4()),

            "email": admin_email,

            "password_hash": hash_password(
                admin_password
            ),

            "name": "HANEULZ Admin",

            "role": "admin",

            "created_at": now_iso()

        })

        logger.info(
            "Seeded admin user"
        )


@app.on_event("startup")
async def on_startup():

    await db.users.create_index(
        "email",
        unique=True
    )

    await seed()


@app.on_event("shutdown")
async def shutdown_db_client():

    client.close()
