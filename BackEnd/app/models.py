from mongoengine import Document, StringField, IntField, ListField, EmailField, BooleanField, ReferenceField, DateField, \
    DateTimeField, EmbeddedDocument, EmbeddedDocumentField
from pydantic import BaseModel, Field, EmailStr


class Users(Document):
    user_id = StringField()
    name = StringField()
    family_name = StringField()
    username = StringField()


class NewUsers(BaseModel):
    user_id: str
    name: str
    family_name: str
    username: EmailStr

    class Config:
        arbitrary_types_allowed = True


class Resum(Document):
    user_id = StringField()
    date = StringField()
    arrivaltime = StringField()
    departuretime = StringField()
    comment = ListField()


class NewResum(BaseModel):
    user_id: str
    date: str
    arrivaltime: str
    departuretime: str
    comment: list

    class Config:
        arbitrary_types_allowed = True


class Arrivaltime(Document):
    user_id = StringField()
    date = StringField()
    arrivaltime = StringField()
    comment = StringField()


class NewArrivaltime(BaseModel):
    user_id: str
    date: str
    arrivaltime: str
    comment: str

    class Config:
        arbitrary_types_allowed = True

class Departuretime(Document):
    user_id = StringField()
    date = StringField()
    departuretime = StringField()
    comment = StringField()


class NewDeparturetime(BaseModel):
    user_id: str
    date: str
    departuretime: str
    comment: str

    class Config:
        arbitrary_types_allowed = True
