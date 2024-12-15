from django.contrib import admin

from ..sites import customer_admin_site
from ..models import Restaurant, Category, ProductVariant, ProductType
from .customer import RestaurantCustomerAdmin, CategoryCustomerAdmin
from .superuser import (RestaurantSuperuserAdmin, CategorySuperuserAdmin, ProductVariantSuperuserAdmin,
                        ProductTypeSuperuserAdmin)


customer_admin_site.register(Restaurant, RestaurantCustomerAdmin)
customer_admin_site.register(Category, CategoryCustomerAdmin)


admin.site.register(Restaurant, RestaurantSuperuserAdmin)
admin.site.register(Category, CategorySuperuserAdmin)
admin.site.register(ProductVariant, ProductVariantSuperuserAdmin)
admin.site.register(ProductType, ProductTypeSuperuserAdmin)
