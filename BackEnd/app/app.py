import json
from typing import List, Union

from fastapi import Depends, FastAPI, HTTPException, Security, status
from datetime import datetime, time, timedelta

from pydantic import BaseModel, EmailStr
from fastapi.responses import JSONResponse
from mongoengine import connect
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from mongoengine import Document, StringField, IntField, ListField, EmailField, BooleanField, ReferenceField, DateField, \
    ObjectIdField, UUIDField, DateTimeField, EmbeddedDocument, EmbeddedDocumentField
from pydantic import BaseModel, Field
from models import Users, NewUsers, Resum, NewResum, Arrivaltime, NewArrivaltime, Departuretime, NewDeparturetime

origins = [
    "http://localhost:3000",
    "http://localhost:8000/",
    "http://localhost:8000/helloword",
    "http://localhost:8000/users/me/",
    "http://localhost:8000/users/me/items/",
    "http://localhost:8000/get_users/{usr_id}",
    "http://localhost:8000/add_user",
    "http://localhost:8000/add_resum",
    "http://localhost:8000/token",
    "http://localhost:8000/search_users"
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


@app.post("/add_user", summary="Create an user")
async def add_user(user: NewUsers):
    """
        Create an user with all the information:

        - **user_id**: each user must have an user_id
        - **name**: the name of the user
        - **family_name**: the lastname of the user
        - **username**: the username of the user (must be an email)
        """
    new_user = Users(
        user_id=user.user_id,
        name=user.name,
        family_name=user.family_name,
        username=user.username,
    )
    new_user.save()

    return {"message": "User added successfully"}


@app.post("/add_resum", summary="")
async def add_resum(resum: NewResum, user_id):
    """
    Summarize the arrival time and departure time of each user per day.
    Called by the **departure_time** function.

    - **resum**: instance of the NewResum class
    - **user_id**: correspond to an user
    - **@return**: the resum's dictionnary
    """
    new_resum = Resum(user_id=user_id,
                      date=resum.date,
                      arrivaltime=resum.arrivaltime,
                      departuretime=resum.departuretime,
                      comment=resum.comment
                      )
    new_resum.save()
    users = Users.objects.get(user_id=user_id).to_json()
    users_list = json.loads(users)
    resum_dic = {
        "user_id": resum.user_id,
        "date": resum.date,
        "arrivatime": resum.arrivaltime,
        "departuretime": resum.departuretime,
        "comment": resum.comment
    }

    return resum_dic


@app.post("/arrival_time")
async def arrival_time(arr: NewArrivaltime, arrivaltime, user_id, date, comment):
    new_arr = Arrivaltime(user_id=user_id,
                          date=date,
                          arrivaltime=arrivaltime,
                          comment=comment)
    new_arr.save()


@app.post("/departure_time")
async def departure_time(dep: NewDeparturetime, departure_time):
    return departure_time


@app.post("/user")
async def user():
    return {"The user active is": "hahhahhahha"}
