 from dotenv import load_dotenv
from pathlib import Path
import os

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

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


mongo_url = os.environ["MONGO_URL"]

client = AsyncIOMotorClient(mongo_url)

db = client[os.environ["DB_NAME"]]


JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"


app = FastAPI()

api_router = APIRouter(prefix="/api")


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)



def now_iso():
    return datetime.now(timezone.utc).isoformat()



def hash_password(password:str):
    return bcrypt.hashpw(
        password.encode(),
        bcrypt.gensalt()).decode()



def verify_password(password, hashed):
    return bcrypt.checkpw(
        password.encode(),
        hashed.encode())

def create_access_token(user_id,email):
    payload = {
        "sub":user_id,
        "email":email,
        "exp":datetime.now(timezone.utc)+timedelta(days=7)}

    return jwt.encode(
        payload,
        JWT_SECRET,
        algorithm=JWT_ALGORITHM)



async def get_current_admin(request:Request):

    header=request.headers.get("Authorization","")
    if not header.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Not authenticated"
        )

    token=header[7:]

    try:

        payload=jwt.decode(
            token,
            JWT_SECRET,
            algorithms=[JWT_ALGORITHM]
        )

        user=await db.users.find_one(
            {"id":payload["sub"]},
            {"_id":0,"password_hash":0}
        )


        if not user:
            raise HTTPException(
                status_code=401,
                detail="User not found"
            )


        return user

    except:
        raise HTTPException(
            status_code=401,
            detail="Invalid token")

# =========================
# AUTH
# =========================


class LoginInput(BaseModel):
    email:EmailStr
    password:str


# =========================
# AU MODELS
# =========================


class AUCreate(BaseModel):
    title:str
    short_description:str=""
    full_story:str=""
    source_url:str
    tags:List[str]=[]
    au_type:str="story"
    source:str="other"

class AU(BaseModel):
    id:str = Field(default_factory=lambda:str(uuid.uuid4()))
    title:str
    author_name:str="Anonymous"
    short_description:str=""
    full_story:str=""
    cover_image_url:Optional[str]=None
    source_url:str
    tags:List[str]=[]
    au_type:str="story"
    source:str="other"
    status:str="pending"
    likes:int=0
    created_at:str=Field(default_factory=now_iso)

# =========================
# COMMENTS
# =========================


class CommentCreate(BaseModel):
    author_name:str="Anonymous"
    text:str



class Comment(BaseModel):
    id:str=Field(default_factory=lambda:str(uuid.uuid4()))
    au_id:str
    author_name:str="Anonymous"
    text:str
    status:str="pending"
    created_at:str=Field(
        default_factory=now_iso)



# =========================
# VARIETY
# =========================


class VarietyCreate(BaseModel):
    show_name:str
    episode:str
    description:str
    photo_url:Optional[str]=None
    youtube_url:Optional[str]=None
    air_date:Optional[str]=None

class Variety(BaseModel):
    id:str=Field(default_factory=lambda:str(uuid.uuid4()))
    show_name:str
    episode:str
    description:str
    photo_url:Optional[str]=None
    youtube_url:Optional[str]=None
    air_date:Optional[str]=None
    created_at:str=Field(default_factory=now_iso)
