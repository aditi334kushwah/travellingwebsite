from django.db import models
from django.core.validators import MinValueValidator

class Package(models.Model):

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    price = models.DecimalField(
        max_digits=10 ,
        decimal_places= 2 ,
        validators=[MinValueValidator(0)]
            )
    image = models.ImageField(upload_to='package_images/')
    location = models.CharField(max_length=200)
    is_popular = models.BooleanField(default=False)
    max_guests = models.PositiveIntegerField(default=1)
    duration_days = models.PositiveIntegerField(default=1)
    duration_nights = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

