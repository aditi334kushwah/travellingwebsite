
from rest_framework import serializers
from .models import Booking
from packages.serializers import PackageSerializer


class BookingSerializer(serializers.ModelSerializer):
    package_details = PackageSerializer(source='package', read_only=True)

    class Meta:
        model = Booking
        fields = '__all__'
        extra_kwargs = {
            'user': {'required': False, 'allow_null': True},
            'booking_date': {'required': False, 'allow_null': True},
            'razorpay_order_id': {'required': False, 'allow_null': True},
            'razorpay_payment_id': {'required': False, 'allow_null': True},
            'razorpay_signature': {'required': False, 'allow_null': True},
            'payment_status': {'required': False},
            'status': {'required': False},
        }


    def validate(self, data):    
            if data['number_of_people'] <= 0:
                raise serializers.ValidationError(
                    "Number of people must be greater than zero."
                )
            return data