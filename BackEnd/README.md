# BACKEND - POINTING APP


## Install mongodb and mongodb-compass

Download Mongodb on MacOS (with brew or xcode): https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

Download Mongodb-compass here : https://www.mongodb.com/try/download/compass

Connect your cluster into Mongodb-compass, try to insert some data.

## Initialise the backend 

Copy for example a simple FastAPI file :

```
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
```

Then install mongoengine with ``` pip3 install mongoengine```

```
pip3 install -r requirements.txt
export DEBUG_MODE=True
export DB_URL="mongodb+srv://<amyeben>:<octopus95>@cluster0.kdpbf.mongodb.net/?retryWrites=true&w=majority"
export DB_NAME="test"
```