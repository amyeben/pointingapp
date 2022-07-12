import json
import array
from typing import List, Union
import time
import datetime
from fastapi import Depends, FastAPI, HTTPException, Security, status
from datetime import datetime, time, timedelta, date
from time import strftime
from pydantic import BaseModel, EmailStr
from fastapi.responses import JSONResponse
from mongoengine import connect
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from mongoengine import Document, StringField, IntField, ListField, EmailField, BooleanField, ReferenceField, DateField, \
    ObjectIdField, UUIDField, DateTimeField, EmbeddedDocument, EmbeddedDocumentField
from pydantic import BaseModel, Field
from models import Users, NewUsers, Resum, NewResum, Arrivaltime, NewArrivaltime, Departuretime, NewDeparturetime, \
    Advertissement, NewAdvertissement
from server import users
import asyncio

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
    "http://localhost:8000/arrival_time",
    "http://localhost:8000/departure_time",
    "http://localhost:8000/get_all_myarrivals",
    "http://localhost:8000/get_all_date",
    "http://localhost:8000/get_all_data",
    "http://localhost:8000/get_advertissements",
    "http://localhost:8000/get_all_advertissements",
    "http://localhost:8000/get_chart_data",
    "http://localhost:8000/get_chart_data_short"
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
time_seven_hours = timedelta(seconds=28800)
hundred_percent = timedelta(seconds=100)


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


@app.post("/add_resum", summary="Summary of the arrival time and departure time for each user", tags=["Resum"])
async def add_resum(resum: NewResum, user_id):
    """
    Summarize the arrival time and departure time of each user per day.
    Called by the **arrival_time** function, and updated by the **departure_time** function.

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


@app.post("/arrival_time", summary="Add an arrival time document", tags=["Arrival Time"])
async def arrival_time(user_id: dict, date: dict, arrivaltime: dict, comment: dict):
    """
    Add an arrival time document, with the following information :

    - **user_id**: the user_id build with the /user_id endpoint
    - **date**: the date of the day build with the /date endpoint
    - **arrivaltime**: the arrival time build with the /ha endpoint
    - **comment**: a comment gived by the user and build with the /ha/comment endoint

    First, it checks if a document with the same date already exists.
    In this case, it returns the previously created document.
    """
    comment_list = []

    arrival = Arrivaltime.objects(date=date["date"], user_id=user_id["user_id"])
    resum = Resum.objects(date=date["date"], user_id=user_id["user_id"])
    if arrival or resum:
        resum = json.loads(resum.to_json())
        print(resum[0])
        return resum[0]

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


@app.post("/departure_time", summary="Add a departure time document", tags=["Departure Time"])
async def departure_time(user_id: dict, date: dict, departuretime: dict, comment: dict):
    """
        Add a departure time document, with the following information :

        - **user_id**: the user_id build with the /user_id endpoint
        - **date**: the date of the day build with the /date endpoint
        - **arrivaltime**: the arrival time build with the /ha endpoint
        - **comment**: a comment gived by the user and build with the /ha/comment endoint

        First, it checks if a document where the departuretime field is empty.
        In this case, it returns the document.
        """
    comment_list = []

    departure = Departuretime.objects(departuretime="", user_id=user_id["user_id"])
    resum = Resum.objects(departuretime="", user_id=user_id["user_id"])
    if not resum:
        resum = Resum.objects(date=date["date"], user_id=user_id["user_id"])
        resum = json.loads(resum.to_json())
        print(resum[0])
        return resum[0]

    arr = Arrivaltime.objects.get(user_id=user_id["user_id"], date=date["date"])
    comment_list.append(arr.comment)

    dep = Departuretime.objects.get(user_id=user_id["user_id"], date=date["date"])
    dep.update(set__departuretime=departuretime["departuretime"])
    dep.update(set__comment=comment["comment"])

    resum = Resum.objects.get(user_id=user_id["user_id"], date=date["date"])
    resum.update(set__departuretime=departuretime["departuretime"])
    comment_list.append(comment["comment"])
    resum.update(set__comment=comment_list)

    new_dep_dict = {
        "user_id": dep.user_id,
        "date": dep.date,
        "departuretime": departuretime["departuretime"],
        "comment": comment["comment"]
    }

    return new_dep_dict


@app.post("/update", summary="Example of how can I update a variable")
async def update(user_id, comment):
    arrivaltime = Arrivaltime.objects.get(user_id=user_id)
    arrivaltime.update(set__comment=comment)
    arrivaltime_list = json.loads(arrivaltime.to_json())

    return arrivaltime_list


@app.post("/ha", summary="Get the arrival time", tags=["Arrival Time"])
async def get_ha(ha: dict):
    print(ha)
    ha_c = convert_hour(ha)
    return ha_c


@app.post("/ha/comment", summary="Get the arrival time : comment", tags=["Arrival Time"])
async def get_ha_comment(comment: dict):
    return comment["comment"]


@app.post("/user_id", summary="Get the user and return an user_id", tags=["All"])
async def get_user(username: dict):
    user_id = users.get_user_id(username["name"])
    return user_id


@app.post("/date", summary="Get the date", tags=["All"])
async def get_date():
    return datetime.today().strftime('%d/%m/%Y')


@app.post("/hd", summary="Get the departure time", tags=["Departure Time"])
async def get_hd(hd: dict):
    print(hd)
    hd_c = convert_hour(hd)
    return hd_c


@app.post("/hd/comment", summary="Get the departure time : comment", tags=["Departure Time"])
async def get_hd_comment(comment: dict):
    return comment["comment"]


def convert_hour(str_hour: dict):
    """
    Take a dict where is a time as a string element and convert it to a time element.

    :param str_hour: string element, content time
    :return: converted time
    """
    date_time_str = str_hour["data"]
    date_time_obj = datetime.strptime(date_time_str, '%H : %M')

    print("The type of the date is now", type(date_time_obj))
    print("The date is", date_time_obj.time())
    return date_time_obj.time()


@app.post("/get_all_myarrivals", summary="Get all data from database for the `Mes Arrivées` page")
async def get_all_date(username: dict):
    """
    Load resum data from the database
    :param username: the user's name
    :return: An array who contains every resum's data of a user
    """
    tab_all_data = []
    user_id = users.get_user_id(username["name"])
    user = Resum.objects(user_id=user_id)
    usr = json.loads(user.to_json())
    indice = 1
    if len(usr) < 25:
        for i in range(len(usr)):
            a = len(usr) - 1
            if usr[a - i]['departuretime'] != "":
                val = get_time_passed(user_id, usr[a - i]['date'])
                print(val)
                if val < time_seven_hours:
                    indice = 1
                else:
                    indice = 0

            tab = [usr[a - i]['date'], usr[a - i]['arrivaltime'], usr[a - i]['departuretime'], usr[a - i]['comment'],
                   indice]
            tab_all_data.append(tab)

    elif len(usr) > 25:
        for i in range(25):
            b = len(usr) - 1
            if usr[b - i]['departuretime'] != "":
                val = get_time_passed(user_id, usr[b - i]['date'])
                # print(val)
                if val < time_seven_hours:
                    indice = 1
                else:
                    indice = 0

            tab = [usr[b - i]['date'], usr[b - i]['arrivaltime'], usr[b - i]['departuretime'], usr[b - i]['comment'],
                   indice]
            tab_all_data.append(tab)
        # print(tab_all_data)
    return tab_all_data


@app.post("/get_advertissements", summary="Get advertissements of user from database")
async def get_advertissments(username: dict):
    user_id = users.get_user_id(username['name'])
    usr_ad = Advertissement.objects(user_id=user_id)
    usr = json.loads(usr_ad.to_json())
    if len(usr) == 0:
        return ""
    return usr[len(usr) - 1]


@app.post("/get_all_advertissements", summary="Get advertissements of user from database")
async def get_all_advertissments(username: dict):
    user_id = users.get_user_id(username['name'])
    usr_ad = Advertissement.objects(user_id=user_id)
    usr = json.loads(usr_ad.to_json())
    return usr


def get_time_passed(user_id, date):
    """
    Check the time passed at the company, if it is above or note seven hours
    :param user_id: the user
    :param date: the date we want to check
    :return: the time passed at the company
    """
    user = Resum.objects(user_id=user_id, date=date)
    usr = json.loads(user.to_json())
    arrivaltime_s = usr[0]['arrivaltime']
    arrivaltime_t = datetime.strptime(arrivaltime_s, '%H:%M:%S')
    departuretime_s = usr[0]['departuretime']
    departuretime_t = datetime.strptime(departuretime_s, '%H:%M:%S')
    start_time = time(arrivaltime_t.time().hour, arrivaltime_t.time().minute, arrivaltime_t.time().second)
    stop_time = time(departuretime_t.time().hour, departuretime_t.time().minute, departuretime_t.time().second)
    datet = datetime.today()
    datetime1 = datetime.combine(datet, start_time)
    datetime2 = datetime.combine(datet, stop_time)
    time_passed = datetime2 - datetime1
    return time_passed


@app.post("/get_chart_data", summary="For getting chart data")
async def get_chart_data(username: dict):
    tab_chart_data = []
    label = []
    dataset = []
    user_id = users.get_user_id(username["name"])
    user = Resum.objects(user_id=user_id)
    usr = json.loads(user.to_json())
    if user.count() > 7:
        for i in range(7):
            a = user.count() - 1
            label.append(usr[a - i]['date'])
            try:
                dst = get_time_rate(user_id, usr[a - i]['date'])
                if dst > hundred_percent:
                    dst = 100
            except:
                dst = 0

            dataset.append(dst)

    else:
        for j in range(7 - user.count()):
            label.append('XX/XX/XXXX')
            dataset.append(0)
        for i in range(user.count()):
            a = user.count() - 1
            label.append(usr[a - i]['date'])
            try:
                dst = get_time_rate(user_id, usr[a - i]['date'])
                if dst > hundred_percent:
                    dst = 100
            except:
                dst = 0

            dataset.append(dst)

    tab_chart_data.append(label)
    tab_chart_data.append(dataset)
    return tab_chart_data


@app.post("/get_chart_data_short", summary="For getting chart data")
async def get_chart_data_short(username: dict):
    tab_chart_data = []
    label = []
    dataset = []
    user_id = users.get_user_id(username["name"])
    user = Resum.objects(user_id=user_id)
    usr = json.loads(user.to_json())
    if user.count() > 4:
        for i in range(4):
            a = user.count() - 1
            label.append(usr[a - i]['date'])
            try:
                dst = get_time_rate(user_id, usr[a - i]['date'])
                if dst > hundred_percent:
                    dst = 100
            except:
                dst = 0

            dataset.append(dst)

    else:
        for j in range(4 - user.count()):
            label.append('XX/XX/XXXX')
            dataset.append(0)
        for i in range(user.count()):
            a = user.count() - 1
            label.append(usr[a - i]['date'])
            try:
                dst = get_time_rate(user_id, usr[a - i]['date'])
                if dst > hundred_percent:
                    dst = 100
            except:
                dst = 0

            dataset.append(dst)

    tab_chart_data.append(label)
    tab_chart_data.append(dataset)
    return tab_chart_data


def get_time_rate(user_id, date):
    time_passed = get_time_passed(user_id, date)
    rate = (time_passed * 100) / 28800
    return rate
