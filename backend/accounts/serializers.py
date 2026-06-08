from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.Serializer):

    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def create(self , validated_data):
        # Hash the password before creating the user
        validated_data['password'] = make_password(validated_data['password'])
        return User.objects.create(**validated_data)
    

    def validate_username(self, value):

        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(
                "Username already exists."
            )

        return value