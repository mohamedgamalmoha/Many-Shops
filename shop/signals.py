from django.core.cache import cache
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, post_delete

from .models import Shop, WorkTime, HeaderImage, SocialMediaLink, Category, Product


User = get_user_model()


CACHE_PREFIX_MAPPING = {
    'restaurant_api_list_view': [Shop, User, HeaderImage, SocialMediaLink, WorkTime],
    'restaurant_api_detail_view': [Shop, User, HeaderImage, SocialMediaLink, WorkTime],
    'restaurant_categories_api_list_view': [Category, Product],
    'category_api_detail_view': [Category, Product],
}


def clear_cache_with_prefix(sender, **kwargs):
    prefixes_to_clear = [prefix for prefix, models in CACHE_PREFIX_MAPPING.items() if sender in models]

    for prefix in prefixes_to_clear:
        pattern = f"*{prefix}*"
        cache.delete_pattern(pattern)


def connect_signals():
    for models in CACHE_PREFIX_MAPPING.values():
        for model in models:
            post_save.connect(clear_cache_with_prefix, sender=model)
            post_delete.connect(clear_cache_with_prefix, sender=model)
