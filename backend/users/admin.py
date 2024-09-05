from django.contrib import admin

# Register your models here.
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "first_name", "last_name", "email", "profile_picture", "create_at", "update_at")
    search_fields = ("username", "first_name", "last_name", "email")
    list_filter = ("create_at", "update_at")
    readonly_fields = ("create_at", "update_at")