from django.contrib.auth.models import AbstractUser
from django.db import models

from Common.enums.Languages import Languages
from movies.models import Video


class User(AbstractUser):
    profile_picture = models.ImageField(null=True, blank=True)
    prefered_lang = models.CharField(
        max_length=20,
        choices=Languages.get_languages(),
        default=Languages.get_default(),
    )
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    # relationships
    watched = models.ManyToManyField(Video, related_name="watched_by", blank=True)

    def __str__(self):
        return self.username
