from django.conf import settings

from django_hosts import patterns, host


host_patterns = patterns(
    '',
    host(settings.BASE_DOMAIN, settings.ROOT_URLCONF, name='default'),
    host(f'(?P<restaurant_slug>[\w-]+)\.{settings.BASE_DOMAIN}', 'restaurant.urls', name='restaurant'),
)
