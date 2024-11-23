import re

from django.core.exceptions import ValidationError


def validate_hex_color(value):
    """
    Validate that the value is a valid hexadecimal color.
    """
    if not re.match(r'^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$', value):
        raise ValidationError(
            f'{value} is not a valid hexadecimal color. It should be in the format #RRGGBB or #RGB.'
        )
