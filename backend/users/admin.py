from django.contrib import admin

from users.models import User  # noqa F401

# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    ...
