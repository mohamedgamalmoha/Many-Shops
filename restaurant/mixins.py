import factory

from .utils import get_model_translation_fields, get_translation_languages


class TranslatableFactoryMixin:
    """
    Mixin to automatically generate and apply translations for translatable fields.
    """

    @classmethod
    def get_faker_for_field(cls, field_name, lang):
        """
        Retrieve a Faker-generated value for a given field.
        """
        field_factory = cls._meta.declarations.get(field_name)
        if isinstance(field_factory, factory.Faker):
            try:
                return field_factory.evaluate(None, None, extra={"locale": lang})
            except AttributeError:
                ...
        return None

    @classmethod
    def get_translatable_fields(cls):
        """
        Get translatable fields for a given model.
        """
        return get_model_translation_fields(cls._meta.model)

    @classmethod
    def _generate_translations(cls):
        """
        Automatically generate unique translations for all translatable fields.
        """
        translations = {}
        print(cls.get_translatable_fields())
        for field in cls.get_translatable_fields():
            for lang in get_translation_languages():
                # Generate a unique value for each field-language combination
                translations[f"{field}_{lang}"] = cls.get_faker_for_field(field, lang)
        return translations

    @classmethod
    def _apply_translations(cls, instance, translations):
        """
        Apply translations to the instance and save.
        """
        for field_with_lang, value in translations.items():
            setattr(instance, field_with_lang, value)
        instance.save()

    @classmethod
    def _create(cls, model_class, *args, **kwargs):
        """
        Override the creation process to handle automatic translation generation.
        """
        translations = cls._generate_translations()
        instance = super()._create(model_class, *args, **kwargs)
        cls._apply_translations(instance, translations)
        return instance
