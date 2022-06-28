from typing import List, Union

from fastapi import Depends, FastAPI, HTTPException, Security, status

from pydantic import BaseModel, EmailStr
from fastapi.responses import JSONResponse
from models import Users
from mongoengine import connect
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
    "http://localhost:8000/",
    "http://localhost:8000/helloword",
    "http://localhost:8000/users/me/",
    "http://localhost:8000/users/me/items/",
    "http://localhost:8000/get_users/{usr_id}",
    "http://localhost:8000/sign_up",
    "http://localhost:8000/token",
    "http://localhost:8000/search_users",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
connect(db="pointingapp", host="localhost", port=27017)


class User(BaseModel):
    name: str
    family_name: str
    email: EmailStr
    is_active: Union[bool, None] = None


class UserIn(User):
    password: str


class UserInDB(User):
    hashed_password: str


class UserOut(User):
    pass


@app.post("/sign_up")
async def sign_up(user: UserInDB):
    new_user = Users(name=user.name,
                     family_name=user.family_name,
                     email=user.email,
                     is_active=user.is_active,
                     hashed_password=get_password_hash(user.hashed_password))
    new_user.save()

    return {"message": "User added successfully"}


@app.get("/helloworld")
async def hello_world():
    return {"message": "hello Amy welcome"}


@app.post("/user")
async def user():
    return {"The user active is": "hahhahhahha"}
