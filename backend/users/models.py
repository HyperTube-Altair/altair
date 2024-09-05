from django.contrib.auth.hashers import make_password
from django.db import models

from Common.enums.Languages import Languages
from movies.models import Video


class User(models.Model):
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=128, null=False, blank=False)
    profile_picture = models.ImageField(null=True, blank=True)
    prefered_lang = models.CharField(
        max_length=10, choices=Languages.get_languages(), default=Languages.ENGLISH
    )
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    # relationships
    watched = models.ManyToManyField(Video, related_name="watched_by")

    def save(self, *args, **kwargs):
        if not self.pk or "password" in self.get_dirty_fields():
            self.password = make_password(self.password)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.username
