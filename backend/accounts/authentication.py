
import jwt 
from django.conf import settings
from rest_framework.authentication import  BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import User

class JWTauthentication(BaseAuthentication):

    def authenticate(self, request):
        

        auth_header = request.headers.get("AUTHORIZATION")

        if not auth_header :
            return None
        
        try:

            token = auth_header.split(" ")[1]

            payload = jwt.decode(

                token ,
                settings.SECRET_KEY,

                algorithms=["HS256"]

            )

            user = User.objects.get(id=payload['user_id'])

            return (user, token)
        
        except Exception :
            raise AuthenticationFailed('Invalid token.')
