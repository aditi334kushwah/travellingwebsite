
from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'
    

    # def validate(self, data):
    #     if not data.get('name'):
    #         raise serializers.ValidationError("Name is required.")
    #     if not data.get('email'):
    #         raise serializers.ValidationError("Email is required.")
    #     if not data.get('message'):
    #         raise serializers.ValidationError("Message is required.")
    #     return data