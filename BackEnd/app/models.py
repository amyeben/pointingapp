from mongoengine import Document, StringField, IntField, ListField, EmailField, BooleanField
from pydantic import BaseModel, Field


class Users(Document):
    name = StringField()
    family_name = StringField()
    email = EmailField()
    is_active = BooleanField()
    hashed_password = StringField()



