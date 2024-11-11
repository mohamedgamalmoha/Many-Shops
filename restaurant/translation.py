from modeltranslation.translator import translator, TranslationOptions

from .models import Restaurant, HeaderImage, Category, Product, ProductVariant


class RestaurantTranslationOptions(TranslationOptions):
    fields = ('name', 'address', 'city', 'state', 'zip_code', 'description')


class HeaderImageTranslationOptions(TranslationOptions):
    fields = ('alt', )


class CategoryTranslationOptions(TranslationOptions):
    fields = ('name', )


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class ProductVariantTranslationOptions(TranslationOptions):
    fields = ('name', )


translator.register(Restaurant, RestaurantTranslationOptions)
translator.register(HeaderImage, HeaderImageTranslationOptions)
translator.register(Category, CategoryTranslationOptions)
translator.register(Product, ProductTranslationOptions)
translator.register(ProductVariant, ProductVariantTranslationOptions)
