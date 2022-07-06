import json
import array
from typing import List, Union
import time
import datetime
from fastapi import Depends, FastAPI, HTTPException, Security, status
from datetime import datetime, time, timedelta
from time import strftime
from pydantic import BaseModel, EmailStr
from fastapi.responses import JSONResponse
from mongoengine import connect
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from mongoengine import Document, StringField, IntField, ListField, EmailField, BooleanField, ReferenceField, DateField, \
    ObjectIdField, UUIDField, DateTimeField, EmbeddedDocument, EmbeddedDocumentField
from pydantic import BaseModel, Field
from models import Users, NewUsers, Resum, NewResum, Arrivaltime, NewArrivaltime, Departuretime, NewDeparturetime
from server import users

origins = [
    "http://localhost:3000",
    "http://localhost:8000/",
    "http://localhost:8000/get_users/",
    "http://localhost:8000/add_user",
    "http://localhost:8000/add_resum",
    "http://localhost:8000/search_users",
    "http://localhost:8000/ha",
    "http://localhost:8000/hd",
    "http://localhost:8000/ha/comment",
    "http://localhost:8000/hd/comment",
    "http://localhost:8000/date",
    "http://localhost:8000/get_user",
    "http://localhost:8000/user_id",
    "http://localhost:8000/arrival_time"
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


@app.post("/add_resum", summary="Summary of the arrival time and departure time for each user")
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
async def arrival_time(user_id: dict, date: dict, arrivaltime: dict, comment: dict):
    comment_list = []

    arrival = Arrivaltime.objects(date=date["date"])
    if arrival:
        arrival = json.loads(arrival.to_json())
        print(arrival[0])
        return arrival[0]

    new_arr = Arrivaltime(user_id=user_id["user_id"],
                          date=date["date"],
                          arrivaltime=arrivaltime["arrivaltime"],
                          comment=comment["comment"])
    new_arr.save()

    new_dep = Departuretime(user_id=user_id["user_id"],
                            date=date["date"],
                            departuretime="",
                            comment="")
    new_dep.save()

    comment_list.append(comment["comment"])
    new_resum = Resum(user_id=user_id["user_id"],
                      date=date["date"],
                      arrivaltime=arrivaltime["arrivaltime"],
                      departuretime="",
                      comment=comment_list)

    new_resum.save()

    new_arr_dict = {
        "user_id": new_arr.user_id,
        "date": new_arr.date,
        "arrivaltime": new_arr.arrivaltime,
        "comment": new_arr.comment
    }
    return new_arr_dict


@app.post("/departure_time")
async def departure_time(user_id, date, departuretime, comment):
    comment_list = []
    arr = Arrivaltime.objects.get(user_id=user_id, date=date)
    comment_list.append(arr.comment)

    dep = Departuretime.objects.get(user_id=user_id, date=date)
    dep.update(set__departuretime=departuretime)
    dep.update(set__comment=comment)

    resum = Resum.objects.get(user_id=user_id, date=date)
    resum.update(set__departuretime=departuretime)
    comment_list.append(comment)
    resum.update(set__comment=comment_list)

    new_dep_dict = {
        "user_id": dep.user_id,
        "date": dep.date,
        "departuretime": departuretime,
        "comment": comment
    }

    return new_dep_dict


@app.post("/update", summary="Example of how can I update a variable")
async def update(user_id, comment):
    arrivaltime = Arrivaltime.objects.get(user_id=user_id)
    arrivaltime.update(set__comment=comment)
    arrivaltime_list = json.loads(arrivaltime.to_json())

    return arrivaltime_list


@app.post("/ha")
async def get_ha(ha: dict):
    print(ha)
    ha_c = convert_hour(ha)
    return ha_c


@app.post("/ha/comment")
async def get_ha_comment(comment: dict):
    return comment["comment"]


@app.post("/user_id")
async def get_user(username: dict):
    user_id = users.get_user_id(username["name"])
    return user_id


@app.post("/date")
async def get_date():
    return datetime.today().strftime('%d/%m/%Y')


@app.post("/hd")
async def get_hd(hd: dict):
    print(hd)
    hd_c = convert_hour(hd)
    return hd_c


@app.post("/hd/comment")
async def get_hd_comment(comment: dict):
    return comment["comment"]


def convert_hour(str_hour: dict):
    date_time_str = str_hour["data"]
    date_time_obj = datetime.strptime(date_time_str, '%H : %M')

    print("The type of the date is now", type(date_time_obj))
    print("The date is", date_time_obj.time())
    return date_time_obj.time()
