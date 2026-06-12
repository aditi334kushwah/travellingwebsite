from rest_framework import serializers
from .models import User
import re


class UserSerializer(serializers.ModelSerializer):

    class Meta :
        model =User
        fields = ['username', 'email' , 'password']

        extra_kwargs= {
            'password' : {'write_only': True}
        }

    
    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        return user
    

    def validate_username(self, value):

        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(
                "Username already exists."
            )
        
        if not re.match(r'^[a-zA-Z0-9_]+$', value):
            raise serializers.ValidationError(
                "Username can only contain letters, numbers, and underscores."
            )

        return value
    
    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "Email already exists."
            )


        return value
    
    def validate_password(self, value):

        if len(value) < 8:
            raise serializers.ValidationError(
                "Password must be at least 8 characters long."
            )

        if not re.search(r'[A-Z]', value):
            raise serializers.ValidationError(
                "Password must contain one upper case letter"
            )
        
        if not re.search(r'[a-z]', value):
            raise serializers.ValidationError(
                "Password must contain one lower case letter"
            )
        if not re.search(r'[0-9]', value):
            raise serializers.ValidationError(
                "Password must contain one digit."
            )
        
        return value


class loginSerializer(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()
