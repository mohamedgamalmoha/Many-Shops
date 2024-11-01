from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from ..models import HeaderImage, SocialMediaLink, ProductVariant
from .base import PermissionsReadOnlyAdminMixin


class BaseVariantInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class ProductVariantInlineAdmin(BaseVariantInlineAdmin):
    model = ProductVariant


class SocialMediaLinkInlineAdmin(BaseVariantInlineAdmin):
    model = SocialMediaLink


class HeaderImageInlineAdmin(BaseVariantInlineAdmin):
    model = HeaderImage


class RestaurantSuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
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


class HeaderImageSuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('alt', 'image', 'url', 'is_active')}),
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


class CategorySuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductSuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'category', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductVariantInlineAdmin]


class ProductVariantSuperuserAdmin(PermissionsReadOnlyAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'product', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('product', 'name', 'price', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
