


#################

import json
from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from models import Users
from mongoengine import connect
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from datetime import timedelta, datetime
from jose import jwt
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
    "http://localhost:8000/",
    "http://localhost:8000/helloword",
    "http://localhost:8000/get_all_users",
    "http://localhost:8000//get_users/{usr_id}",
    "http://localhost:8000/sign_up",
    "http://localhost:8000/token",
    "http://localhost:8000/search_users",
]

app = FastAPI()
#connect(db="pointingapp", host="localhost", port=27017)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#####################CLASSES

class NewUsers(BaseModel):
    usr_id: int
    name: str
    family_name: str
    email: str
    password: str


class Login(BaseModel):
    username: str
    password: str


############################


""" 
    @:return : all the users of the database
"""


@app.get("/get_all_users")
async def get_all_users():
    users = Users.objects().to_json()
    users_list = json.loads(users)

    return {"users": users_list}


""" 
    @:return : a special user mentioned with an id
"""


@app.get("/get_users/{usr_id}")
async def get_users(usr_id):
    users = Users.objects.get(usr_id=usr_id)
    users_dic = {
        "usr_id": users.usr_id,
        "name": users.name,
        "family_name": users.family_name,
        "email": users.email,
        "password": users.password
    }

    return users_dic


""" 
    @:return : a special user mentioned with by his name
"""


@app.get("/search_users")
async def search_users(name):
    users = json.loads(Users.objects.filter(name=name).to_json())
    return {"users": users}


"""
    AUTHENTICATION  
"""

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = "84ba592aec5a56a84d1c6fa03ca2147f3563582d3d47542cdd1f3a26bf3080c7"
ALGORITHM = "HS256"


def get_password_hash(password):
    return pwd_context.hash(password)


@app.post("/sign_up")
async def sign_up(users: NewUsers):
    new_users = Users(usr_id=users.usr_id,
                      name=users.name,
                      family_name=users.family_name,
                      email=users.email,
                      password=get_password_hash(users.password))
    new_users.save()

    return {"message": "User added successfully"}


def authenticate_user(email, password):
    try:
        user = json.loads(Users.objects.get(email=email).to_json())
        password_check = pwd_context.verify(password, user['password'])
        return password_check
    except Users.DoesNotExist:
        return False


def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    username = form_data.username
    password = form_data.password

    if authenticate_user(username, password):
        acces_token = create_access_token(data={"sub": username}, expires_delta=timedelta(minutes=30))
        return {"access_token": acces_token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password")


@app.get("/")
async def home(token: str = Depends(oauth2_scheme)):
    return {"token": token}


@app.get("/helloworld")
async def hello_world():
    return {"message": "hello Amy welcome"}

