from modeltranslation.translator import translator, TranslationOptions

from .models import Shop, Category, LetterSize, Product


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class NameTranslationOptions(TranslationOptions):
    fields = ('name',)


class LetterSizeOptions(TranslationOptions):
    fields = ('size',)


translator.register(Shop, NameTranslationOptions)
translator.register(Category, NameTranslationOptions)
translator.register(LetterSize, LetterSizeOptions)
translator.register(Product, ProductTranslationOptions)
