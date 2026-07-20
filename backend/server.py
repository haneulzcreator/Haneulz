from dotenv import load_dotenv
from pathlib import Path
import os

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import logging
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import bcrypt
import jwt

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALGORITHM = "HS256"

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(days=7),
        "type": "access",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_admin(request: Request) -> dict:
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = auth_header[7:]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


class LoginInput(BaseModel):
    email: EmailStr
    password: str


class AUCreate(BaseModel):
    title: str
    author_name: str
    short_description: str
    full_story: str
    cover_image_url: Optional[str] = None
    tags: List[str] = []
    au_type: str = "story"
    source: str = "other"
    source_url: Optional[str] = None


class AU(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    author_name: str
    short_description: str
    full_story: str
    cover_image_url: Optional[str] = None
    tags: List[str] = []
    au_type: str = "story"
    source: str = "other"
    status: str = "pending"
    likes: int = 0
    created_at: str = Field(default_factory=now_iso)
    source_url: Optional[str] = None

class CommentCreate(BaseModel):
    author_name: str
    text: str


class Comment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    au_id: str
    author_name: str
    text: str
    status: str = "pending"
    created_at: str = Field(default_factory=now_iso)


class VarietyCreate(BaseModel):
    show_name: str
    episode: str
    description: str
    photo_url: Optional[str] = None
    youtube_url: Optional[str] = None
    air_date: Optional[str] = None


class Variety(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    show_name: str
    episode: str
    description: str
    photo_url: Optional[str] = None
    youtube_url: Optional[str] = None
    air_date: Optional[str] = None
    created_at: str = Field(default_factory=now_iso)

@api_router.post("/auth/login")
async def login(input: LoginInput):
    print("Searching email:", input.email.lower())
    print("Database:", db.name)

    all_users = await db.users.find({}).to_list(10)
    print("Users in database:", all_users)

    user = await db.users.find_one({"email": input.email.lower()})

    if not user or not verify_password(input.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token(user["id"], user["email"])

    return {
        "token": token,
        "user": {
            "email": user["email"],
            "name": user.get("name", "Admin"),
            "role": user.get("role", "admin")
        }
    }
@api_router.get("/auth/me")
async def me(admin: dict = Depends(get_current_admin)):
    return admin


@api_router.post("/aus", response_model=AU)
async def submit_au(input: AUCreate):
    au = AU(**input.model_dump())
    await db.aus.insert_one(au.model_dump())
    return au


@api_router.get("/aus", response_model=List[AU])
async def list_aus(au_type: Optional[str] = None, source: Optional[str] = None):
    query = {"status": "approved"}
    if au_type:
        query["au_type"] = au_type
    if source:
        query["source"] = source
    docs = await db.aus.find(query, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.get("/aus/{au_id}", response_model=AU)
async def get_au(au_id: str):
    doc = await db.aus.find_one({"id": au_id, "status": "approved"}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="AU not found")
    return doc


@api_router.post("/aus/{au_id}/like")
async def like_au(au_id: str):
    result = await db.aus.update_one({"id": au_id, "status": "approved"}, {"$inc": {"likes": 1}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="AU not found")
    doc = await db.aus.find_one({"id": au_id}, {"_id": 0})
    return {"likes": doc["likes"]}


@api_router.get("/aus/{au_id}/comments", response_model=List[Comment])
async def list_comments(au_id: str):
    docs = await db.comments.find({"au_id": au_id, "status": "approved"}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.post("/aus/{au_id}/comments", response_model=Comment)
async def submit_comment(au_id: str, input: CommentCreate):
    au = await db.aus.find_one({"id": au_id})
    if not au:
        raise HTTPException(status_code=404, detail="AU not found")
    comment = Comment(au_id=au_id, **input.model_dump())
    await db.comments.insert_one(comment.model_dump())
    return comment


@api_router.get("/variety", response_model=List[Variety])
async def list_variety():
    docs = await db.variety.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.get("/admin/aus", response_model=List[AU])
async def admin_list_aus(status: Optional[str] = None, admin: dict = Depends(get_current_admin)):
    query = {}
    if status:
        query["status"] = status
    docs = await db.aus.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.patch("/admin/aus/{au_id}")
async def admin_update_au(au_id: str, body: dict, admin: dict = Depends(get_current_admin)):
    new_status = body.get("status")
    if new_status not in ("approved", "rejected", "pending"):
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.aus.update_one({"id": au_id}, {"$set": {"status": new_status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="AU not found")
    return {"ok": True, "status": new_status}


@api_router.delete("/admin/aus/{au_id}")
async def admin_delete_au(au_id: str, admin: dict = Depends(get_current_admin)):
    await db.aus.delete_one({"id": au_id})
    await db.comments.delete_many({"au_id": au_id})
    return {"ok": True}


@api_router.get("/admin/comments", response_model=List[Comment])
async def admin_list_comments(status: Optional[str] = None, admin: dict = Depends(get_current_admin)):
    query = {}
    if status:
        query["status"] = status
    docs = await db.comments.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.patch("/admin/comments/{comment_id}")
async def admin_update_comment(comment_id: str, body: dict, admin: dict = Depends(get_current_admin)):
    new_status = body.get("status")
    if new_status not in ("approved", "rejected", "pending"):
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.comments.update_one({"id": comment_id}, {"$set": {"status": new_status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Comment not found")
    return {"ok": True, "status": new_status}


@api_router.delete("/admin/comments/{comment_id}")
async def admin_delete_comment(comment_id: str, admin: dict = Depends(get_current_admin)):
    await db.comments.delete_one({"id": comment_id})
    return {"ok": True}


@api_router.post("/admin/variety", response_model=Variety)
async def admin_create_variety(input: VarietyCreate, admin: dict = Depends(get_current_admin)):
    v = Variety(**input.model_dump())
    await db.variety.insert_one(v.model_dump())
    return v


@api_router.delete("/admin/variety/{variety_id}")
async def admin_delete_variety(variety_id: str, admin: dict = Depends(get_current_admin)):
    await db.variety.delete_one({"id": variety_id})
    return {"ok": True}


@api_router.get("/")
async def root():
    return {"message": "HANEULZ API"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


async def seed():
    admin_email = os.environ.get("ADMIN_EMAIL", "admin@haneulz.com").lower()
    admin_password = os.environ.get("ADMIN_PASSWORD", "haneulz2025")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()),
            "email": admin_email,
            "password_hash": hash_password(admin_password),
            "name": "HANEULZ Admin",
            "role": "admin",
            "created_at": now_iso(),
        })
        logger.info("Seeded admin user")
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one({"email": admin_email}, {"$set": {"password_hash": hash_password(admin_password)}})

    if await db.aus.count_documents({}) == 0:
        sample = [
            {
                "title": "Coffee Shop AU",
                "author_name": "haneulz.archive",
                "short_description": "JL runs a tiny pastel cafe; Han is the regular who always orders the same drink but never leaves his number.",
                "full_story": "The bell above the door chimed the way it always did at 8:03 in the morning. JL didn't even look up anymore \u2014 he already reached for the iced vanilla latte, extra shot, oat milk.\n\n\"Morning,\" Han said, sliding onto his usual stool by the window where the light did something unfair to his eyes.\n\n\"You're predictable,\" JL smiled, sliding the cup across the counter.\n\n\"Only about coffee,\" Han said. And for the first time in three months, he left a napkin behind with eleven digits and a little drawn star.",
                "tags": ["fluff", "coffee shop", "slow burn"],
                "au_type": "story",
                "source": "x",
                "status": "approved",
                "likes": 42,
            },
            {
                "title": "Rockstar & Producer AU",
                "author_name": "haneulz.daydreams",
                "short_description": "Han is the frontman everyone screams for. JL is the quiet producer who hears the song beneath the noise.",
                "full_story": "The studio was dark except for the glow of the console. Han's voice cracked on the bridge for the fourth time.\n\n\"Again,\" JL said softly into the talkback. \"But this time, sing it like you mean it for one person.\"\n\nHan looked through the glass. \"Which person?\"\n\nJL didn't answer. He just pressed record.",
                "tags": ["angst", "music", "pining"],
                "au_type": "story",
                "source": "ao3",
                "status": "approved",
                "likes": 58,
            },
            {
                "title": "Soulmate Timer AU",
                "author_name": "blueberry.skies",
                "short_description": "Everyone is born with a countdown to meeting their soulmate. JL's hit zero the day AHOF's lineup was announced.",
                "full_story": "The numbers on JL's wrist had counted down his whole life. He never told anyone how fast they were dropping that January.\n\nWhen the final nine stood on stage together, his timer blinked 00:00:00.\n\nHan turned to him first. \"Hi,\" he whispered. \"I think I've been waiting for you.\"",
                "tags": ["soulmate", "fated", "fluff"],
                "au_type": "story",
                "source": "tiktok",
                "status": "approved",
                "likes": 71,
            },
            {
                "title": "Headcanon: Shared Playlist",
                "author_name": "moonlit.foha",
                "short_description": "A soft headcanon about the songs they secretly add to each other's playlists.",
                "full_story": "Headcanon that JL and Han keep one shared playlist neither of them named. JL adds sleepy R&B for 3am van rides. Han sneaks in cheesy love songs and pretends they were 'for practice.' Neither deletes a single one.",
                "tags": ["headcanon", "soft"],
                "au_type": "headcanon",
                "source": "x",
                "status": "approved",
                "likes": 33,
            },
        ]
        for s in sample:
            au = AU(**s)
            await db.aus.insert_one(au.model_dump())
        logger.info("Seeded sample AUs")

    # Variety shows are curated via the featured playlist / admin panel — no placeholder seeding.


@app.on_event("startup")
async def on_startup():
    await db.users.create_index("email", unique=True)
    await seed()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
