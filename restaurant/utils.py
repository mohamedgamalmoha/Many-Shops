from django.conf import settings

from modeltranslation.translator import translator


def get_model_translation_fields(model):
    # Retrieve the options registered for the given model
    translation_options = translator.get_options_for_model(model)

    # Return the list of translated fields
    return translation_options.get_field_names()


def get_translation_languages():
    # Fetch the languages from the settings
    languages = getattr(settings, 'MODELTRANSLATION_LANGUAGES', getattr(settings, 'LANGUAGES', []))
    return tuple(map(lambda lang: lang[0], languages))
