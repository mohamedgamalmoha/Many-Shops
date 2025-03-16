from django.contrib import admin

from ..sites import customer_admin_site
from ..models import Shop, Category, LetterSize, NumberSize, Color, Tag, Product
from .customer import ShopCustomerAdmin, CategoryCustomerAdmin, ProductCustomerAdmin
from .superuser import (ShopSuperuserAdmin, CategorySuperuserAdmin, LetterSizeSuperuserAdmin, NumberSizeSuperUserAdmin,
                        ColorSuperUserAdmin, ProductSuperuserAdmin, TagSuperUserAdmin)


customer_admin_site.register(Shop, ShopCustomerAdmin)
customer_admin_site.register(Category, CategoryCustomerAdmin)
customer_admin_site.register(Product, ProductCustomerAdmin)

admin.site.register(Shop, ShopSuperuserAdmin)
admin.site.register(Category, CategorySuperuserAdmin)
admin.site.register(LetterSize, LetterSizeSuperuserAdmin)
admin.site.register(NumberSize, NumberSizeSuperUserAdmin)
admin.site.register(Color, ColorSuperUserAdmin)
admin.site.register(Tag, TagSuperUserAdmin)
admin.site.register(Product, ProductSuperuserAdmin)
