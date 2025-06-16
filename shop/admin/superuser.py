from django.contrib import admin
from django.contrib.admin.widgets import AdminTextInputWidget
from django.utils.translation import gettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationInlineModelAdmin

from .base import ImageDisplayAminMixin
from ..constants import DEFAULT_THEME_IMAGE_URL
from ..widgets import ImageRadioSelect, ColorCheckboxSelectMultiple
from ..models import HeaderImage, SocialMediaLink, Category, Product, ProductImage


class BaseInlineAdmin(admin.StackedInline):
    extra = 1
    min_num = 0
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLinkInlineAdmin(BaseInlineAdmin):
    model = SocialMediaLink


class HeaderImageInlineAdmin(ImageDisplayAminMixin, BaseInlineAdmin):
    model = HeaderImage
    readonly_fields = ['create_at', 'update_at']
    readonly_image_fields = ['view_image']


class ProductInlineAdmin(TranslationInlineModelAdmin, BaseInlineAdmin):
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order')}),
        (_('More Info'), {'fields': ('price', 'seal_percentage', 'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('tag', 'letter_sizes', 'number_sizes', 'color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    model = Product
    extra = 1
    min_num = 0
    max_num = None
    can_delete = True
    show_change_link = False
    

class ProductImageInlineAdmin(BaseInlineAdmin):
    model = ProductImage


class CategoryInlineAdmin(TranslationInlineModelAdmin, ImageDisplayAminMixin, BaseInlineAdmin):
    model = Category
    readonly_fields = ['create_at', 'update_at', 'view_image']


class ShopSuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['order', 'name', 'owner', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('owner', ('name', 'slug'), 'email', 'contact_number', 'image', 'view_image',
                                     'is_active', 'is_featured', 'order')}),
        (_('Theme'), {'fields': ('theme', 'primary_color', 'border_color')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [CategoryInlineAdmin, HeaderImageInlineAdmin, SocialMediaLinkInlineAdmin]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'primary_color' in form.base_fields:
            form.base_fields['primary_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        if 'border_color' in form.base_fields:
            form.base_fields['border_color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        if 'theme' in form.base_fields:
            form.base_fields['theme'].widget = ImageRadioSelect(default_image_url=DEFAULT_THEME_IMAGE_URL)
        return form


class CategorySuperuserAdmin(ImageDisplayAminMixin, TranslationAdmin):
    list_display = ['order', 'name', 'shop', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('shop', 'name', 'image', 'view_image', 'is_active', 'order')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    # inlines = [ProductInlineAdmin]


class LetterSizeSuperuserAdmin(TranslationAdmin):
    list_display = ('order', 'size', 'is_active', 'create_at', 'update_at')
    list_display_links = ('order', 'size')
    list_filter = ('is_active', )
    readonly_fields = ('create_at', 'update_at')
    fieldsets = (
        (_('Main Info'), {'fields': ('size', 'is_active', 'order')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class NumberSizeSuperUserAdmin(admin.ModelAdmin):
    list_display = ('order', 'size', 'is_active', 'create_at', 'update_at')
    list_display_links = ('order', 'size')
    list_filter = ('is_active', )
    readonly_fields = ('create_at', 'update_at')
    fieldsets = (
        (_('Main Info'), {'fields': ('size', 'is_active', 'order')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ColorSuperUserAdmin(admin.ModelAdmin):
    list_display = ('order', 'color', 'is_active', 'create_at', 'update_at')
    list_display_links = ('order', 'color')
    list_filter = ('is_active', )
    readonly_fields = ('create_at', 'update_at')
    fieldsets = (
        (_('Main Info'), {'fields': ('color', 'is_active', 'order')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'color' in form.base_fields:
            form.base_fields['color'].widget = AdminTextInputWidget(attrs={'type': 'color'})
        return form


class TagSuperUserAdmin(admin.ModelAdmin):
    list_display = ('order', 'name', 'is_active', 'create_at', 'update_at')
    list_display_links = ('order', 'name')
    list_filter = ('is_active', )
    readonly_fields = ('create_at', 'update_at')
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'icon', 'is_active', 'order')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )


class ProductSuperuserAdmin(TranslationAdmin):
    list_display = ['order', 'name', 'category', 'is_active', 'ready_to_ship']
    list_display_links = ['order', 'name']
    list_filter = ['is_active', 'ready_to_ship']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description', 'order')}),
        (_('More Info'), {'fields': ('price', 'after_sale_price', 'ready_to_ship', 'is_active')}),
        (_('Specs'), {'fields': ('tag', 'letter_sizes', 'number_sizes', 'colors')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductImageInlineAdmin]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if 'colors' in form.base_fields:
            form.base_fields['colors'].widget = ColorCheckboxSelectMultiple()
        return form
