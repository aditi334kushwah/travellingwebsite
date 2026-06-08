from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    username = models.CharField(max_length=150 , unique=True)

    email = models.EmailField(unique=True)

    password = models.CharField(max_length=128)

    
    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Hash the password before saving
        if self.password:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
