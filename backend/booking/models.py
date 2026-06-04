from django.db import models
from django.core.validators import MinValueValidator


class Booking(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    phone = models.CharField(max_length=15)

    country = models.CharField(max_length=100)

    number_of_people = models.PositiveIntegerField()

    travel_month = models.CharField(max_length=20)

    budget_per_person = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )

    special_requirements = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f"{self.name} - {self.country}"