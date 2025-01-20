from django.db import models
from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from ..constants import DEFAULT_THEME_IMAGE_URL
from ..models import HeaderImage, SocialMediaLink, Product, ProductImage
from .base import (PermissionsAllowAllAdminMixin, PermissionsAllowOwnerAdminMixin, ShopRelatedObjectAdminMixin,
                   ImageDisplayAminMixin)


class BaseInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 10
    can_delete = True
    show_change_link = False
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = SocialMediaLink


class ProductImageInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = ProductImage


class HeaderImageInlineCustomerAdmin(ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']
    exclude = ['create_at', 'update_at']
    fieldsets = (
        (None, {'fields': ('image', 'view_image', 'is_active')}),
    )


class ProductInlineCustomerAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    readonly_fields = ['create_at', 'update_at']
    image_field_name = 'tag'
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order', 'tag', 'view_image')}),
        (_('More Info'), {'fields': ('price', 'seal_percentage', 'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('letter_sizes', 'number_sizes', 'color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    actions = None
    model = Product
    extra = 1
    min_num = 0
    max_num = None
    can_delete = True
    show_change_link = False


class ShopCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active']
    readonly_fields = ['show_theme', 'create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('email', 'contact_number', 'image', 'view_image')}),
    )
    inlines = [HeaderImageInlineCustomerAdmin, SocialMediaLInlineCustomerAdmin]

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(owner=request.user)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'primary_color' in form.base_fields:
            form.base_fields['primary_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        return form

    def show_theme(self, obj):
        theme = obj.theme
        if theme and theme.image:
            theme_src = theme.image.url
            theme_alt = theme.title
        else:
            theme_src = DEFAULT_THEME_IMAGE_URL
            theme_alt = None
        return mark_safe(f"<a href='#' ><img src='{theme_src}' alt={theme_alt} width=200 height=150></a>")

    show_theme.short_description = 'Theme'

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class CategoryCustomerAdmin(PermissionsAllowOwnerAdminMixin, ShopRelatedObjectAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['order', 'name', 'is_active']
    list_display_links = ('order', 'name')
    readonly_fields = ['create_at', 'update_at']
    actions = None
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'image', 'view_image', 'is_active', 'order')}),
    )
    # inlines = [ProductInlineCustomerAdmin]


class ProductCustomerAdmin(PermissionsAllowOwnerAdminMixin, TranslationAdmin):
    list_display = ['order', 'name', 'category', 'is_active', 'ready_to_ship']
    list_display_links = ['order', 'name']
    list_filter = ['is_active', 'ready_to_ship']
    readonly_fields = ['create_at', 'update_at'] 
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order')}),
        (_('More Info'), {'fields': ('price', 'seal_percentage', 'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('letter_sizes', 'number_sizes', 'color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductImageInlineCustomerAdmin]
