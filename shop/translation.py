from modeltranslation.translator import translator, TranslationOptions

from .models import Shop, Category, Product


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class NameTranslationOptions(TranslationOptions):
    fields = ('name',)


translator.register(Shop, NameTranslationOptions)
translator.register(Category, NameTranslationOptions)
translator.register(Product, ProductTranslationOptions)
