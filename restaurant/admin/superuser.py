from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from ..models import HeaderImage, SocialMediaLink, ProductVariant
from .base import PermissionsReadOnlyAdminMixin, ImageDisplayAminMixin


class BaseInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class ProductVariantInlineAdmin(TranslationInlineModelAdmin, BaseInlineAdmin):
    model = ProductVariant


class SocialMediaLinkInlineAdmin(BaseInlineAdmin):
    model = SocialMediaLink


class HeaderImageInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']


class RestaurantSuperuserAdmin(PermissionsReadOnlyAdminMixin, TranslationAdmin):
    list_display = ['name', 'owner', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('owner', 'name', 'description', 'email', 'contact_number')}),
        (_('Address'), {'fields': ('city', 'state', 'zip_code')}),
        (_('More Info'), {'fields': ('opening_time', 'closing_time', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [HeaderImageInlineAdmin, SocialMediaLinkInlineAdmin]


class HeaderImageSuperuserAdmin(PermissionsReadOnlyAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'alt', 'url', 'image', 'view_image',  'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class SocialMediaLinkSuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class CategorySuperuserAdmin(PermissionsReadOnlyAdminMixin, TranslationAdmin):
    list_display = ['name', 'restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductSuperuserAdmin(PermissionsReadOnlyAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'category', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'view_image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductVariantInlineAdmin]


class ProductVariantSuperuserAdmin(PermissionsReadOnlyAdminMixin, TranslationAdmin):
    list_display = ['name', 'product', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('product', 'name', 'price', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
