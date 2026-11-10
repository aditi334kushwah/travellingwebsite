import uuid
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

    package_code = models.CharField(
        max_length=20,
        unique=True,
        null=True,
        blank=True,
        help_text="Unique Package Code e.g. PKG-GOA-101 or auto-generated unique ID"
    )
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

    def save(self, *args, **kwargs):
        if not self.package_code:
            # Auto-generate a clean readable unique package ID e.g. PKG-78A4
            short_id = uuid.uuid4().hex[:6].upper()
            self.package_code = f"PKG-{short_id}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.package_code or 'PKG'} - {self.title}"


class PackageItinerary(models.Model):
    package = models.ForeignKey(Package, on_delete=models.CASCADE, related_name="itineraries")
    day_number = models.PositiveIntegerField(default=1)
    title = models.CharField(max_length=200, help_text="e.g. Day 1: Arrival & City Exploration")
    description = models.TextField(help_text="Detailed activities for the day")
    activities = models.CharField(max_length=300, blank=True, null=True, help_text="Comma-separated or key highlights e.g. Airport Pickup, Hotel Check-in, Sunset Walk")
    meals_included = models.CharField(max_length=100, blank=True, null=True, default="Breakfast", help_text="e.g. Breakfast, Lunch, Dinner")

    class Meta:
        ordering = ['day_number']
        unique_together = ('package', 'day_number')

    def __str__(self):
        return f"{self.package.title} - Day {self.day_number}: {self.title}"