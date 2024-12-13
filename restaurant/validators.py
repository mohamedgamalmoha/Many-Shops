import re

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_hex_color(value):
    """
    Validate that the value is a valid hexadecimal color.
    """
    if not re.match(r'^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$', value):
        raise ValidationError(
            _(f'{value} is not a valid hexadecimal color. It should be in the format #RRGGBB or #RGB.'),
            params={'value': value}
        )


def validate_english_alphanum(value):
    """
    Validates that the given value contains only English characters, numerics, dashes (-), and underscores (_).
    """
    if not re.match(r'^[a-zA-Z0-9_-]+$', value):
        raise ValidationError(
            _('The slug can only contain English letters, numerics, dashes (-), and underscores (_).'),
            params={'value': value},
        )
