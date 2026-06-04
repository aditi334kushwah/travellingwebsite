
from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = '__all__'


        def validate(self, data):    
            if data['number_of_people'] <= 0:
                raise serializers.ValidationError(
                    "Number of people must be greater than zero."
                )
            return data