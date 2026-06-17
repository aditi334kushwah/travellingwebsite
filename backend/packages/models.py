from django.db import models
from django.core.validators import MinValueValidator


class Package(models.Model):
    CATEGORY_CHOICES = [
        ("adventure",  "Adventure"),
        ("spiritual",  "Spiritual"),
        ("cultural",   "Cultural"),
        ("nature",     "Nature"),
        ("heritage",   "Heritage"),
        ("relaxation", "Relaxation"),
        ("wildlife",   "Wildlife"),
        ("beach",      "Beach"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )

    image = models.ImageField(upload_to="package_images/")
    location = models.CharField(max_length=200)

    is_popular = models.BooleanField(default=False)

    max_guests = models.PositiveIntegerField(default=1)

    duration_days = models.PositiveIntegerField(default=1)
    duration_nights = models.PositiveIntegerField(default=0)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="adventure"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title