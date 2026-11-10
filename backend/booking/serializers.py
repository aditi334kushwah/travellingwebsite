
from rest_framework import serializers
from .models import Booking
from packages.serializers import PackageSerializer


class BookingSerializer(serializers.ModelSerializer):
    package_details = PackageSerializer(source='package', read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'


    def validate(self, data):    
            if data['number_of_people'] <= 0:
                raise serializers.ValidationError(
                    "Number of people must be greater than zero."
                )
            return data