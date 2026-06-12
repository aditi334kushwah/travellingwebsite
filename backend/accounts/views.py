from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer , loginSerializer
from django.contrib.auth import authenticate , login
from django.contrib.auth import logout
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
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

@csrf_exempt
@api_view(['POST'])
def loginView(request):

    serializer = loginSerializer(data = request.data)

    if serializer.is_valid():

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(
            username=username ,
            password=password)
        
        if user :

            login(request, user)
            return Response(
                {
                    "success": True,
                    "message": "You have logged in successfully."
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
def logoutView(request):

    logout(request)

    return  Response(   
        {
            "success": True,
            "message": "You have logged out successfully."
        },
        status = 200
    )

