
import jwt
import datetime
from django.conf import settings


def generate_access_token(user):

    payload = {
        "user_id" : user.id,
        "username" : user.username,
        "exp" : datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
        "iat" : datetime.datetime.utcnow()

    }

    token = jwt.encode(
        payload,
        settings.SECRET_KEY,
        algorithm="HS256"
    )


    return token

    