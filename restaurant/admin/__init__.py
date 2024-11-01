from django.contrib import admin
from django.contrib.auth.models import Group

from ..sites import customer_admin_site
from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant
from .customer import (RestaurantCustomerAdmin, HeaderImageCustomerAdmin, SocialMediaLinkCustomerAdmin,
                       CategoryCustomerAdmin, ProductCustomerAdmin)
from .superuser import (RestaurantSuperuserAdmin, HeaderImageSuperuserAdmin, SocialMediaLinkSuperuserAdmin,
                        CategorySuperuserAdmin, ProductSuperuserAdmin, ProductVariantSuperuserAdmin)


customer_admin_site.register(Restaurant, RestaurantCustomerAdmin)
customer_admin_site.register(HeaderImage, HeaderImageCustomerAdmin)
customer_admin_site.register(SocialMediaLink, SocialMediaLinkCustomerAdmin)
customer_admin_site.register(Category, CategoryCustomerAdmin)
customer_admin_site.register(Product, ProductCustomerAdmin)


admin.site.register(Restaurant, RestaurantSuperuserAdmin)
admin.site.register(HeaderImage, HeaderImageSuperuserAdmin)
admin.site.register(SocialMediaLink, SocialMediaLinkSuperuserAdmin)
admin.site.register(Category, CategorySuperuserAdmin)
admin.site.register(Product, ProductSuperuserAdmin)
admin.site.register(ProductVariant, ProductVariantSuperuserAdmin)
admin.site.unregister(Group)
