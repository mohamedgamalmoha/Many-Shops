from modeltranslation.translator import translator, TranslationOptions

from .models import MainInfo, Service


class TitleWithDescriptionTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


translator.register(MainInfo, TitleWithDescriptionTranslationOptions)
translator.register(Service, TitleWithDescriptionTranslationOptions)
