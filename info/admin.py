from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin

from restaurant.admin.base import ImageDisplayAminMixin
from .models import MainInfo, Service, AboutUs, Theme, SocialMedia, ContactUs


class MainInfoAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['__str__', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    search_fields = ['title', 'description']
    fieldsets = (
        (_('Main Info'), {'fields': ('title', 'description', 'image', 'view_image')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request):
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)


class ActiveTitleWithDescriptionAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['__str__', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    search_fields = ['title', 'description']
    fieldsets = (
        (_('Main Info'), {'fields': ('title', 'description', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ThemeAdmin(ActiveTitleWithDescriptionAdmin):
    fieldsets = (
        (_('Main Info'), {'fields': ('title', 'description', 'image', 'view_image', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'create_at', 'update_at']
    list_filter = ['platform', 'is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'create_at', 'update_at')
    search_fields = ('email', 'full_name', 'message')
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('full_name', 'email', 'phone_number', 'message')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


admin.site.register(MainInfo, MainInfoAdmin)
admin.site.register(Service, ActiveTitleWithDescriptionAdmin)
admin.site.register(AboutUs, ActiveTitleWithDescriptionAdmin)
admin.site.register(Theme, ThemeAdmin)
admin.site.register(SocialMedia, SocialMediaAdmin)
admin.site.register(ContactUs, ContactUsAdmin)
