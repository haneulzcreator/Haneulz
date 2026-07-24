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

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, File, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr

# =========================
# ENV
# =========================

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]

client = AsyncIOMotorClient(mongo_url)

db = client[os.environ["DB_NAME"]]


JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"

# =========================
# APP
# =========================

app = FastAPI()

api_router = APIRouter(prefix="/api")


logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)

# =========================
# FILE UPLOAD SETUP
# =========================

UPLOAD_DIR = Path(__file__).parent / "static" / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

app.mount("/static", StaticFiles(directory=ROOT_DIR / "static"), name="static")

# =========================
# HELPERS
# =========================

import re

def now_iso():
    return datetime.now(
        timezone.utc
    ).isoformat()


def youtube_thumbnail(url: str):
    if not url:
        return None

    patterns = [
        r"youtu\.be\/([^?&]+)",
        r"youtube\.com\/watch\?v=([^?&]+)",
        r"youtube\.com\/embed\/([^?&]+)",
        r"youtube\.com\/shorts\/([^?&]+)",
    ]

    for pattern in patterns:
        match = re.search(pattern, url)

        if match:
            video_id = match.group(1)
            return f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"

    return None

async def save_image(image: UploadFile):

    if not image:
        return None

    ext = Path(image.filename).suffix

    filename = f"{uuid.uuid4()}{ext}"

    file_path = UPLOAD_DIR / filename

    with open(file_path, "wb") as buffer:
        buffer.write(await image.read())

    return f"/static/uploads/{filename}"

def hash_password(password: str):
    return bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")


def verify_password(password, hashed):
    return bcrypt.checkpw(
        password.encode("utf-8"),
        hashed.encode("utf-8")
    )


def create_access_token(user_id, email):
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(days=7)
    }

    return jwt.encode(
        payload,
        JWT_SECRET,
        algorithm=JWT_ALGORITHM
    )
# =========================
# AUTH MODEL
# =========================

class LoginInput(BaseModel):
    email: EmailStr
    password: str

# =========================
# AU MODELS
# =========================

class AUCreate(BaseModel):
    title: str
    short_description: str = ""
    full_story: str = ""
    source_url: str
    tags: List[str] = Field(default_factory=list)
    au_type: str = "story"
    source: str = "other"


class AU(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    author_name: str = "Anonymous"
    short_description: str = ""
    full_story: str = ""
    cover_image_url: Optional[str] = None
    source_url: Optional[str] = None
    tags: List[str] = Field(default_factory=list)
    au_type: str = "story"
    source: str = "other"
    status: str = "pending"
    likes: int = 0
    featured: bool = False
    bookmarked: int = 0
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)

# =========================
# SITE SETTINGS MODEL
# =========================

class SiteSettings(BaseModel):
    hero_title: str = "HANEULZ CORNER"
    hero_subtitle: str = "Your cozy space for all things AHOF & Haneulz"
    whole_group_title: str = "NOW, THE WHOLE GROUP"
    whole_group_desc: str = "Spotlighting all nine members of AHOF together."
    about_title: str = "Our Little Corner"
    about_subtitle: str = "Welcome to Haneulz Corner ☁️💗"
    about_letter: str = "Haneulz Corner started as a simple idea from one Hansum who just wanted a place where everything about HANEULZ could be found a little more easily.\n\nLike many fans, I often found myself scrolling through old bookmarks..."
    about_signoff_text: str = "Made with lots of love, late-night ideas, and a few too many bookmarks."
    about_signoff_author: str = "— K ☁️💗"

# =========================
# VARIETY
# =========================

class VarietyCreate(BaseModel):
    section: str
    category: Optional[str] = None
    show_name: str
    label: Optional[str] = ""
    episode: Optional[str] = ""
    description: str = ""
    thumbnail: Optional[str] = None
    youtube_url: Optional[str] = None
    air_date: Optional[str] = None
    
class Variety(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    section: str
    category: str
    label: str
    show_name: str
    episode: str
    description: str
    thumbnail: str | None = None
    youtube_url: str
    air_date: str
    featured: bool = False
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)

class PlaylistItemCreate(BaseModel):
    playlist: str
    title: str
    platform: str
    thumbnail: Optional[str] = None
    url: str

class PlaylistItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    playlist: str
    title: str
    platform: str
    thumbnail: Optional[str] = None
    description: str = ""
    url: str
    created_at: str = Field(default_factory=now_iso)
    updated_at: str = Field(default_factory=now_iso)


# =========================
# ADMIN AUTH CHECK
# =========================

async def get_current_admin(request: Request):

    auth = request.headers.get("Authorization")

    if not auth:
        raise HTTPException(
            status_code=401,
            detail="Missing authorization"
        )

    try:
        token = auth.replace("Bearer ", "")

        payload = jwt.decode(
            token,
            os.getenv("JWT_SECRET"),
            algorithms=["HS256"]
        )

        if not payload.get("email"):
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        return payload

    except Exception:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )
        
# =========================
# AUTH ROUTES
# =========================


@api_router.post("/auth/login")
async def login(input: LoginInput):

    user = await db.users.find_one(
        {
            "email": input.email.lower()
        }
    )


    if not user or not verify_password(
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

@api_router.get("/auth/me")
async def me(
    admin: dict = Depends(get_current_admin)
):

    return admin

# =========================
# AU ROUTES
# =========================

@api_router.post(

    "/aus",

    response_model=AU

)

async def submit_au(

    title: str = Form(...),

    author_name: str = Form("Anonymous"),

    short_description: str = Form(""),

    full_story: str = Form(""),

    source_url: str = Form(...),

    au_type: str = Form("story"),

    source: str = Form("other"),

    image: UploadFile = File(None)

):

    cover_image = None

    if image:

        cover_image = await save_image(image)

    au = AU(

        title=title,

        author_name=author_name or "Anonymous",

        short_description=short_description,

        full_story=full_story,

        source_url=source_url,

        au_type=au_type,

        source=source,

        cover_image_url=cover_image

    )

    await db.aus.insert_one(

        au.model_dump()

    )

    return au
    
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
            "_id":0
        }

    ).sort(
        "created_at",
        -1

    ).to_list(500)


    return docs


@api_router.get(
    "/aus/{au_id}",
    response_model=AU
)
async def get_au(
    au_id:str
):

    doc = await db.aus.find_one(
        {
            "id":au_id,
            "status":"approved"
        },
        {
            "_id":0
        }
    )


    if not doc:

        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )


    return doc


@api_router.post(
    "/aus/{au_id}/like"
)
async def like_au(
    au_id:str
):

    result = await db.aus.update_one(

        {
            "id":au_id,
            "status":"approved"
        },

        {
            "$inc":{
                "likes":1
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
            "id":au_id
        },
        {
            "_id":0
        }
    )


    return {"likes":doc["likes"]}

# =========================
# COMMENTS
# =========================

class CommentCreate(BaseModel):
    author_name: str = "Anonymous"
    text: str


class Comment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    au_id: str
    author_name: str = "Anonymous"
    text: str
    status: str = "pending"
    created_at: str = Field(default_factory=now_iso)

@api_router.post(
    "/aus/{au_id}/comments",
    response_model=Comment
)
async def submit_comment(
    au_id: str,
    input: CommentCreate
):

    au = await db.aus.find_one({"id": au_id})

    if not au:
        raise HTTPException(
            status_code=404,
            detail="AU not found"
        )


    comment = Comment(
        au_id=au_id,
        **input.model_dump()
    )


    await db.comments.insert_one(
        comment.model_dump()
    )


    return comment

# =========================
# VARIETY ROUTES
# =========================

@api_router.get(
    "/variety",
    response_model=List[Variety]
)
async def list_variety():

    docs = await db.variety.find(
        {},
        {
            "_id":0
        }

    ).sort(
        "created_at",
        -1

    ).to_list(500)


    return docs

# =========================
# ADMIN AU ROUTES
# =========================

@api_router.get(
    "/admin/aus",
    response_model=List[AU]
)
async def admin_list_aus(
    status: Optional[str] = None,
    admin: dict = Depends(get_current_admin)
):

    query = {}


    if status:

        query["status"] = status

    docs = await db.aus.find(
        query,
        {
            "_id":0
        }

    ).sort(
        "created_at",
        -1

    ).to_list(1000)


    return docs

@api_router.patch("/admin/aus/{au_id}")
async def admin_update_au(au_id:str,body:dict,admin:dict = Depends(get_current_admin)):
    new_status = body.get("status")
    if new_status not in ("approved","rejected","pending"):
        raise HTTPException(status_code=400,detail="Invalid status")
    result = await db.aus.update_one({"id":au_id},
{"$set":{"status":new_status}})

    if result.matched_count == 0:
        raise HTTPException(status_code=404,detail="AU not found")
    return {"ok":True,"status":new_status}

@api_router.delete("/admin/aus/{au_id}")
async def admin_delete_au(au_id:str,admin:dict = Depends(get_current_admin)):
    await db.aus.delete_one({"id":au_id})
    await db.comments.delete_many({"au_id":au_id})
    return {"ok":True}

# =========================
# ADMIN COMMENTS
# =========================

@api_router.get(
    "/admin/comments",
    response_model=List[Comment]
)
async def admin_list_comments(
    status:Optional[str]=None,
    admin:dict=Depends(get_current_admin)
):

    query = {}


    if status:

        query["status"] = status



    docs = await db.comments.find(
        query,
        {
            "_id":0
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
    comment_id:str,
    body:dict,
    admin:dict=Depends(get_current_admin)
):

    new_status = body.get(
        "status"
    )


    if new_status not in (
        "approved",
        "rejected",
        "pending"
    ):

        raise HTTPException(
            status_code=400,
            detail="Invalid status"
        )


    result = await db.comments.update_one({"id":comment_id},
        {"$set":{"status":new_status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404,detail="Comment not found")

    return {"ok":True,"status":new_status}

@api_router.delete("/admin/comments/{comment_id}")
async def admin_delete_comment(comment_id:str,admin:dict=Depends(get_current_admin)):
    await db.comments.delete_one({"id":comment_id})
    return {"ok":True}

# =========================
# PUBLIC VARIETY ROUTE
# =========================

@api_router.get("/variety")
async def get_variety():

    docs = await db.variety.find(
        {},
        {"_id":0}
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return docs
    
# =========================
# ADMIN VARIETY ROUTES
# =========================

@@api_router.post("/admin/variety", response_model=Variety)
async def admin_create_variety(
    section: str = Form(...),
    category: str = Form(""),
    show_name: str = Form(...),
    label: str = Form(""),
    episode: str = Form(""),
    description: str = Form(""),
    youtube_url: str = Form(""),
    air_date: str = Form(""),
    image: UploadFile = File(None),
    admin: dict = Depends(get_current_admin)
):

    thumbnail = None

    if image:
        thumbnail = await save_image(image)

    elif youtube_url:
        thumbnail = youtube_thumbnail(youtube_url)

    variety = Variety(
        id=str(uuid.uuid4()),
        section=section,
        category=category,
        show_name=show_name,
        label=label,
        episode=episode,
        description=description,
        youtube_url=youtube_url,
        air_date=air_date,
        thumbnail=thumbnail
    )

    await db.variety.insert_one(variety.model_dump())

    return variety
    
@api_router.put("/admin/variety/{variety_id}", response_model=Variety)
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

    image: UploadFile = File(None),

    admin: dict = Depends(get_current_admin)
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
        data["thumbnail"] = await save_image(image)

    elif youtube_url:
        data["thumbnail"] = youtube_thumbnail(youtube_url)

    await db.variety.update_one(
        {"id": variety_id},
        {"$set": data}
    )

    return await db.variety.find_one(
        {"id": variety_id},
        {"_id":0}
    )


@api_router.delete("/admin/variety/{variety_id}")
async def admin_delete_variety(
    variety_id: str,
    admin: dict = Depends(get_current_admin)
):
    await db.variety.delete_one(
        {"id": variety_id}
    )

    return {"ok": True}

# =========================
# FAN POSTS / DC PLAYLIST
# =========================

class FanPostCreate(BaseModel):
    category: str   # yence-posts, han-posts, haneulz-dc
    platform: str   # instagram, x, tiktok
    thumbnail: str
    url: str
    caption: str = ""


class FanPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    platform: str
    thumbnail: str
    url: str
    caption: str = ""
    created_at: str = Field(default_factory=now_iso)

# =========================
# FAN POST ROUTES
# =========================

@api_router.get("/fanposts/{category}")
async def get_fan_posts(category: str):

    posts = await db.fanposts.find(
        {"category": category},
        {"_id":0}
    ).sort(
        "created_at",
        -1
    ).to_list(500)

    return posts


@api_router.post("/admin/fanposts", response_model=FanPost)
async def admin_create_fan_post(
    input: FanPostCreate,
    admin: dict = Depends(get_current_admin)
):

    post = FanPost(
        **input.model_dump()
    )

    await db.fanposts.insert_one(
        post.model_dump()
    )

    return post


@api_router.delete("/admin/fanposts/{post_id}")
async def admin_delete_fan_post(
    post_id: str,
    admin: dict = Depends(get_current_admin)
):

    await db.fanposts.delete_one(
        {"id": post_id}
    )

    return {"ok": True}
    
# =========================
# PLAYLIST ROUTES
# =========================

@api_router.get("/playlists/{playlist}")
async def get_playlist(playlist: str):
    docs = await db.playlists.find(
        {"playlist": playlist},
        {"_id": 0}
    ).sort("created_at", -1).to_list(500)

    return docs

@api_router.post("/admin/playlists", response_model=PlaylistItem)
async def admin_add_playlist_item(
    input: PlaylistItemCreate,
    admin: dict = Depends(get_current_admin)
):
    item = PlaylistItem(**input.model_dump())

    await db.playlists.insert_one(item.model_dump())

    return item

@api_router.delete("/admin/playlists/{item_id}")
async def admin_delete_playlist_item(
    item_id: str,
    admin: dict = Depends(get_current_admin)
):
    await db.playlists.delete_one({"id": item_id})

    return {"ok": True}

# =========================
# SITE SETTINGS ROUTES
# =========================

@api_router.get("/settings")
async def get_settings():
    settings = await db.settings.find_one({"_id": "site_content"}, {"_id": 0})
    if not settings:
        default_settings = {
            "hero_title": "HANEULZ CORNER",
            "hero_subtitle": "Your cozy space for all things AHOF & Haneulz",
            "whole_group_title": "NOW, THE WHOLE GROUP",
            "whole_group_desc": "Spotlighting all nine members of AHOF together.",
            "about_title": "Our Little Corner",
            "about_subtitle": "Welcome to Haneulz Corner ☁️💗",
            "about_letter": "Haneulz Corner started as a simple idea from one Hansum who just wanted a place where everything about HANEULZ could be found a little more easily.\n\nLike many fans, I often found myself scrolling through old bookmarks...",
            "about_signoff_text": "Made with lots of love, late-night ideas, and a few too many bookmarks.",
            "about_signoff_author": "— K ☁️💗"
        }
        await db.settings.insert_one({"_id": "site_content", **default_settings})
        return default_settings

    return settings


@api_router.post("/admin/settings")
async def update_settings(
    settings: SiteSettings,
    admin: dict = Depends(get_current_admin)
):
    data = settings.model_dump()
    await db.settings.update_one(
        {"_id": "site_content"},
        {"$set": data},
        upsert=True
    )
    return {"message": "Settings updated successfully! ☁️💗", "settings": data}

# =========================
# ROOT
# =========================

@api_router.get("/")
async def root():

    return {"message":"HANEULZ API"}

# =========================
# UPLOAD ROUTE
# =========================

@api_router.post("/upload-thumbnail")
async def upload_thumbnail(
    file: UploadFile = File(...),
    admin: dict = Depends(get_current_admin)
):
    try:
        # Generate a unique filename so photos never overwrite each other
        file_extension = Path(file.filename).suffix
        unique_filename = f"{uuid.uuid4()}{file_extension}"
        file_path = UPLOAD_DIR / unique_filename

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Returns the path that will be stored in MongoDB for the post
        return {"url": f"/static/uploads/{unique_filename}"}

    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Failed to upload image: {str(e)}"
        )
# =========================
# INCLUDE ROUTER
# =========================

app.include_router(api_router)

# =========================
# CORS
# =========================

app.add_middleware(CORSMiddleware,allow_credentials=True,allow_origins=os.environ.get("CORS_ORIGINS","*").split(","),
    allow_methods=["*"],
    allow_headers=["*"])

# =========================
# DATABASE STARTUP
# =========================

async def seed():
    admin_email = os.environ.get("ADMIN_EMAIL","admin@haneulz.com").lower()
    admin_password = os.environ.get("ADMIN_PASSWORD","haneulz2025")
    existing = await db.users.find_one({"email":admin_email})

    if existing is None:
        await db.users.insert_one({"id":str(uuid.uuid4()),"email":admin_email,"password_hash":hash_password(admin_password),
            "name":"HANEULZ Admin",
            "role":"admin",
            "created_at":now_iso()})
        logger.info("Seeded admin user")

@app.on_event("startup")
async def on_startup():
    await db.users.create_index("email",unique=True)
    await seed()

@app.on_event("shutdown")
async def shutdown_db_client():

    client.close()
