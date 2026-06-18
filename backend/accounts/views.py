from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import UserSerializer , loginSerializer
from django.contrib.auth import authenticate 
from django.contrib.auth import logout
from rest_framework.response import Response
from .jwt_utils import generate_access_token
from rest_framework.permissions import AllowAny


@api_view(['POST'])
@permission_classes([AllowAny])
def registerView(request):


    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(
            {
                "success": True,
                "message": "Your account has been created successfully."
            },
            status=201
        )

    return Response(
        serializer.errors,
        status=400
    )


@api_view(['POST'])
@permission_classes([AllowAny])
def loginView(request):

    serializer = loginSerializer(data = request.data)

    if serializer.is_valid():

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(
            username=username ,
            password=password)
        
        if user :

            access_token = generate_access_token(user)
            return Response(
                {
                    "success": True,
                    "message": "You have logged in successfully.",
                    "access_token" : access_token
                },
                status = 200
            )
        return Response(
            {
                "success": False,
                "message": "Invalid credentials."
            },
            status = 401
        )
    
    return Response(
         serializer.errors,
        status=400
    )
            


@api_view(['POST'])
@permission_classes([AllowAny])
def logoutView(request):

    logout(request)

    return  Response(   
        {
            "success": True,
            "message": "You have logged out successfully."
        },
        status = 200
    )

