from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant


class HeaderImageInlineCustomerAdmin(admin.StackedInline):
    model = HeaderImage
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class SocialMediaLInlineCustomerAdmin(admin.StackedInline):
    model = SocialMediaLink
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class ProductVariantInlineCustomerAdmin(admin.StackedInline):
    model = ProductVariant
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class ProductInlineCustomerAdmin(admin.StackedInline):
    model = Product
    extra = 1
    min_num = 1
    max_num = 5
    can_delete = True
    show_change_link = True
    readonly_fields = ('create_at', 'update_at')


class HeaderImageCustomerAdmin(admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('alt', 'image', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "restaurant":
            kwargs["queryset"] = Restaurant.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(restaurant__owner=request.user)


class SocialMediaLinkCustomerAdmin(admin.ModelAdmin):
    list_display = ['restaurant', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'platform', 'url', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "restaurant":
            kwargs["queryset"] = Restaurant.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(restaurant__owner=request.user)


class RestaurantCustomerAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    list_filter = ['is_active']
    fieldsets = (
        (_('Main Info'), {'fields': ('name', 'description', 'email', 'contact_number')}),
        (_('Address'), {'fields': ('city', 'state', 'zip_code')}),
        (_('More Info'), {'fields': ('opening_time', 'closing_time', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [HeaderImageInlineCustomerAdmin, SocialMediaLInlineCustomerAdmin]

    def has_view_or_change_permission(self, request, obj=None):
        return obj is None or (obj and obj.owner == request.user)

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return obj is None or (obj and obj.owner == request.user)

    def has_add_permission(self, request):
        if self.get_queryset(request).count() >= 1:
            return False
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or (obj and obj.owner == request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or (obj and obj.owner == request.user)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(owner__id=request.user.id)

    def save_model(self, request, obj, form, change):
        if not change:  # Only set owner when adding a new object
            obj.owner = request.user
        super().save_model(request, obj, form, change)


class ProductVariantCustomerAdmin(admin.ModelAdmin):
    list_display = ['name', 'create_at', 'update_at']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('product', 'name', 'price')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "product":
            kwargs["queryset"] = Product.objects.filter(product__restaurant__owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(product__category__restaurant__owner=request.user)


class ProductCustomerAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('category', 'name', 'description')}),
        (_('More Info'), {'fields': ('price', 'image', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductVariantInlineCustomerAdmin]

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "category":
            kwargs["queryset"] = Category.objects.filter(restaurant__owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(category__restaurant__owner=request.user)


class CategoryCustomerAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'create_at', 'update_at']
    list_filter = ['is_active']
    readonly_fields = ['create_at', 'update_at']
    fieldsets = (
        (_('Main Info'), {'fields': ('restaurant', 'name', 'is_active')}),
        (_('Important Dates'), {'fields': ('create_at', 'update_at')}),
    )
    inlines = [ProductInlineCustomerAdmin]

    def has_view_or_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True

    def has_view_permission(self, request, obj=None):
        return True

    def has_add_permission(self, request):
        return True

    def has_delete_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def has_change_permission(self, request, obj=None):
        return obj is None or obj.is_owner(request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "restaurant":
            kwargs["queryset"] = Restaurant.objects.filter(owner=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(restaurant__owner=request.user)
