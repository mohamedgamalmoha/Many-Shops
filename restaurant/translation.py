from modeltranslation.translator import translator, TranslationOptions

from .models import Restaurant, HeaderImage, Category, Product, ProductVariant, ProductType


class HeaderImageTranslationOptions(TranslationOptions):
    fields = ('alt', )


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class NameTranslationOptions(TranslationOptions):
    fields = ('name',)


translator.register(Restaurant, NameTranslationOptions)
translator.register(HeaderImage, HeaderImageTranslationOptions)
translator.register(Category, NameTranslationOptions)
translator.register(Product, ProductTranslationOptions)
translator.register(ProductVariant, NameTranslationOptions)
translator.register(ProductType, NameTranslationOptions)
