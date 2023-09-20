from django.db import models

from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=10, unique=True)
    email = models.EmailField(unique=True)
    address = models.TextField()
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = [
        "full_name",
        "phone_number",
        "address",
    ]

    objects = UserManager()

    def __str__(self):
        return f"{self.full_name} {self.email}"
