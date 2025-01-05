from modeltranslation.translator import translator, TranslationOptions

from .models import Restaurant, Category, Product, ProductVariant, ProductType


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class NameTranslationOptions(TranslationOptions):
    fields = ('name',)


translator.register(Restaurant, NameTranslationOptions)
translator.register(Category, NameTranslationOptions)
translator.register(Product, ProductTranslationOptions)
translator.register(ProductVariant, NameTranslationOptions)
translator.register(ProductType, NameTranslationOptions)
