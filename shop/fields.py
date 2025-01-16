from django import forms
from django.contrib.postgres.fields import ArrayField


class CustomArrayField(ArrayField):

    def formfield(self, **kwargs):
        defaults = {
            "form_class": forms.MultipleChoiceField,
            "choices": self.base_field.choices,
            **kwargs
        }
        return super(ArrayField, self).formfield(**defaults)
