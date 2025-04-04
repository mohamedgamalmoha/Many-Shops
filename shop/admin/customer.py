from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from ..constants import DEFAULT_THEME_IMAGE_URL
from ..widgets import ColorCheckboxSelectMultiple
from ..models import HeaderImage, SocialMediaLink, Category, Product, ProductImage
from .base import (PermissionsAllowAllAdminMixin, PermissionsAllowOwnerAdminMixin, ShopRelatedObjectAdminMixin,
                   ImageDisplayAminMixin)


class BaseInlineCustomerAdmin(PermissionsAllowAllAdminMixin, admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 10
    can_delete = True
    show_change_link = False
    exclude = ('create_at', 'update_at')


class SocialMediaLInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = SocialMediaLink
    exclude = ('create_at', 'update_at')


class ProductImageInlineCustomerAdmin(BaseInlineCustomerAdmin):
    model = ProductImage
    exclude = ('create_at', 'update_at')


class HeaderImageInlineCustomerAdmin(ImageDisplayAminMixin, BaseInlineCustomerAdmin):
    model = HeaderImage
    readonly_image_fields = ['view_image']
    exclude = ('create_at', 'update_at')
    fieldsets = (
        (None, {'fields': ('image', 'view_image', 'is_active')}),
    )


class ProductInlineCustomerAdmin(TranslationInlineModelAdmin, BaseInlineCustomerAdmin):
    exclude = ('create_at', 'update_at')
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order')}),
        (_('More Info'), {'fields': ('price', 'after_sale_price', 'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('tag', 'letter_sizes', 'number_sizes', 'colors')}),
    )
    actions = None
    model = Product
    extra = 1
    min_num = 0
    max_num = None
    can_delete = False
    show_change_link = False


class ShopCustomerAdmin(PermissionsAllowOwnerAdminMixin, ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['name', 'is_active']
    readonly_fields = ['show_theme']
    exclude = ('create_at', 'update_at')
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


class CategoryCustomerAdmin(PermissionsAllowOwnerAdminMixin, ShopRelatedObjectAdminMixin, ImageDisplayAminMixin,
                            TranslationAdmin):
    list_display = ['order', 'name', 'is_active']
    list_display_links = ('order', 'name')
    exclude = ('create_at', 'update_at')
    actions = None
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'image', 'view_image', 'is_active', 'order')}),
    )
    inlines = [ProductInlineCustomerAdmin]


class ProductCustomerAdmin(PermissionsAllowOwnerAdminMixin, TranslationAdmin):
    list_display = ['order', 'name', 'category', 'is_active', 'ready_to_ship']
    list_display_links = ['order', 'name']
    list_filter = ['is_active', 'ready_to_ship']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order', 'price', 'after_sale_price',
                                     'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('tag', 'letter_sizes', 'number_sizes', 'colors')}),
    )
    inlines = [ProductImageInlineCustomerAdmin]

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(category__shop__id=request.user.shop.id)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'colors' in form.base_fields:
            form.base_fields['colors'].widget = ColorCheckboxSelectMultiple()
        if 'category' in form.base_fields:
            form.base_fields['category'].queryset = Category.objects.filter(shop__id=request.user.shop.id)
        return form
