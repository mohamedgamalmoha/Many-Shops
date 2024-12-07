from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from .base import ImageDisplayAminMixin, ColorFieldAdminMixin
from ..models import HeaderImage, SocialMediaLink


class BaseInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLinkInlineAdmin(BaseInlineAdmin):
    model = SocialMediaLink


class HeaderImageInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']


class RestaurantSuperuserAdmin(ColorFieldAdminMixin, TranslationAdmin):
    list_display = ['name', 'owner', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('owner', 'name', 'description', 'email', 'contact_number', 'image')}),
        (_('Address'), {'fields': ('city', 'state', 'zip_code')}),
        (_('More Info'), {'fields': ('opening_time', 'closing_time', 'is_active')}),
        (_('Theme'), {'fields': ('primary_color', 'secondary_color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [HeaderImageInlineAdmin, SocialMediaLinkInlineAdmin]


class HeaderImageSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'alt', 'url', 'image', 'view_image',  'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaLinkSuperuserAdmin(admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class CategorySuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'category', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Offered By'), {'fields': ('types', 'variants')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductVariantSuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'restaurant', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductTypeSuperuserAdmin(TranslationAdmin):
    list_display = ['name', 'restaurant', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'icon')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
