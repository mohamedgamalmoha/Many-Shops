from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.backends import get_user_model
from django.utils.translation import gettext_lazy as _


User = get_user_model()


class CustomUserAdmin(UserAdmin):
    fieldsets = (
        ("Basic Info", {"fields": ("username", "password")}),
        (_("Personal Info"), {"fields": ("full_name", "phone_number", "email")}),
        (_("Permissions"), {"fields": ("is_active", "is_superuser")}),
        (_("Important Dates"), {"fields": ("last_login", "date_joined")}),
    )

    list_filter = ("is_staff", "is_superuser", "is_active")
    ordering = ("-date_joined",)
    filter_horizontal = ()


admin.site.unregister(Group)
admin.site.register(User, CustomUserAdmin)
