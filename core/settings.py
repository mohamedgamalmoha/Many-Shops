"""
Django settings for core project.

Generated by 'django-admin startproject' using Django 4.2.16.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
from django.utils.translation import gettext_lazy as _

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-iv!&1p$8h!ldb=hozb2@t6pwh0(va#b$!s@b9%!nl^d+z95-ge'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# BASE_DOMAIN = "localhost:8000"

ALLOWED_HOSTS = [
    # "localhost",
    # ".localhost",
    '*'
]

DEFAULT_HOST = 'default'

# Application definition

INSTALLED_APPS = [
    'jazzmin',
    'modeltranslation',
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 'django_hosts',
    'rest_framework',
    'django_filters',
    'drf_spectacular',
    'rest_flex_fields',
    'restaurant',
    'info'
]

MIDDLEWARE = [
    # 'django_hosts.middleware.HostsRequestMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'django_hosts.middleware.HostsResponseMiddleware',
]

ROOT_URLCONF = 'core.urls'
# ROOT_HOSTCONF = 'core.hosts'

REACT_JS_BUILD_DIR = BASE_DIR / 'frontend'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates', ],  # REACT_JS_BUILD_DIR
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4CORS_ALLOWED_ORIGINS .2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'ar'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LANGUAGES = [
    ('ar', _('Arabic')),
    ('he', _('Hebrew')),
]

# Enable fallback to default language if a translation is missing
MODELTRANSLATION_FALLBACK_LANGUAGES = {
    'default': ('ar',),  # Fallback language for all other languages
    'he': ('ar',),       # Fallback for Hebrew
}

MODELTRANSLATION_AUTO_POPULATE = True  # Automatically populate untranslated fields with the default language value
MODELTRANSLATION_DEFAULT_LANGUAGE = 'ar'  # Default language for the admin
MODELTRANSLATION_PREPOPULATE_LANGUAGE = 'ar'  # Prepopulate translation fields from this language

LOCALE_PATHS = [
    BASE_DIR / 'locale'
]

IS_MONOLINGUAL = False

TRANSLATABLE_MODEL_MODULES = [
    'restaurant.models',
    'info.models',
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/assets/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [
    BASE_DIR / "static",
    # REACT_JS_BUILD_DIR / 'assets'
]
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


#: Configures the Django Rest Framework (DRF) settings. This includes default permissions, authentication classes,
#: pagination styles, and other DRF-specific settings.
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.OrderingFilter'
    ),
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    "DATETIME_FORMAT": "%Y-%m-%d %H:%M:%S",
    "DATETIME_INPUT_FORMAT": "%Y-%m-%d %H:%M:%S"
}


#: Specifies settings for the DRF-Spectacular package. This includes schema generation settings for the API
#: documentation, such as title, version, and description.
SPECTACULAR_SETTINGS = {
    # A regex specifying the common denominator for all operation paths. If
    # SCHEMA_PATH_PREFIX is set to None, drf-spectacular will attempt to estimate
    # a common prefix. Use '' to disable.
    # Mainly used for tag extraction, where paths like '/api/v1/albums' with
    # a SCHEMA_PATH_PREFIX regex '/api/v[0-9]' would yield the tag 'albums'.
    'SCHEMA_PATH_PREFIX': None,
    # Remove matching SCHEMA_PATH_PREFIX from operation path. Usually used in
    # conjunction with appended prefixes in SERVERS.
    'SCHEMA_PATH_PREFIX_TRIM': False,
    # Insert a manual path prefix to the operation path, e.g. '/service/backend'.
    # Use this for example to align paths when the API is mounted as a sub-resource
    # behind a proxy and Django is not aware of that. Alternatively, prefixes can
    # also specified via SERVERS, but this makes the operation path more explicit.
    'SCHEMA_PATH_PREFIX_INSERT': '',
    # Coercion of {pk} to {id} is controlled by SCHEMA_COERCE_PATH_PK. Additionally,
    # some libraries (e.g. drf-nested-routers) use "_pk" suffixed path variables.
    # This setting globally coerces path variables like "{user_pk}" to "{user_id}".
    'SCHEMA_COERCE_PATH_PK_SUFFIX': False,

    # Schema generation parameters to influence how components are constructed.
    # Some schema features might not translate well to your target.
    # Demultiplexing/modifying components might help alleviate those issues.
    'DEFAULT_GENERATOR_CLASS': 'drf_spectacular.generators.SchemaGenerator',
    # Create separate components for PATCH endpoints (without required list)
    'COMPONENT_SPLIT_PATCH': True,
    # Split components into request and response parts where appropriate
    # This setting is highly recommended to achieve the most accurate API
    # description, however it comes at the cost of having more components.
    'COMPONENT_SPLIT_REQUEST': False,
    # Aid client generator targets that have trouble with read-only properties.
    'COMPONENT_NO_READ_ONLY_REQUIRED': False,

    # Adds "minLength: 1" to fields that do not allow blank strings. Deactivated
    # by default because serializers do not strictly enforce this on responses and
    # so "minLength: 1" may not always accurately describe API behavior.
    # Gets implicitly enabled by COMPONENT_SPLIT_REQUEST, because this can be
    # accurately modeled when request and response components are separated.
    'ENFORCE_NON_BLANK_FIELDS': False,

    # Configuration for serving a schema subset with SpectacularAPIView
    'SERVE_URLCONF': None,
    # complete public schema or a subset based on the requesting user
    'SERVE_PUBLIC': True,
    # include schema endpoint into schema
    'SERVE_INCLUDE_SCHEMA': True,
    # list of authentication/permission classes for spectacular's views.
    'SERVE_PERMISSIONS': ['rest_framework.permissions.AllowAny'],
    # None will default to DRF's AUTHENTICATION_CLASSES
    'SERVE_AUTHENTICATION': None,

    # Dictionary of general configuration to pass to the SwaggerUI({ ... })
    # https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
    # The settings are serialized with json.dumps(). If you need customized JS, use a
    # string instead. The string must then contain valid JS and is passed unchanged.
    'SWAGGER_UI_SETTINGS': {
        'deepLinking': True,
    },
    # Initialize SwaggerUI with additional OAuth2 configuration.
    # https://swagger.io/docs/open-source-tools/swagger-ui/usage/oauth2/
    'SWAGGER_UI_OAUTH2_CONFIG': {},

    # Dictionary of general configuration to pass to the Redoc.init({ ... })
    # https://github.com/Redocly/redoc#redoc-options-object
    # The settings are serialized with json.dumps(). If you need customized JS, use a
    # string instead. The string must then contain valid JS and is passed unchanged.
    'REDOC_UI_SETTINGS': {},

    # CDNs for swagger and redoc. You can change the version or even host your
    # own depending on your requirements. For self-hosting, have a look at
    # the sidecar option in the README.
    'SWAGGER_UI_DIST': 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@latest',
    'SWAGGER_UI_FAVICON_HREF': '/static/images/logo.png',
    'REDOC_DIST': 'https://cdn.jsdelivr.net/npm/redoc@latest',

    # Append OpenAPI objects to path and components in addition to the generated objects
    'APPEND_PATHS': {},
    'APPEND_COMPONENTS': {},

    # DISCOURAGED - please don't use this anymore as it has tricky implications that
    # are hard to get right. For authentication, OpenApiAuthenticationExtension are
    # strongly preferred because they are more robust and easy to write.
    # However if used, the list of methods is appended to every endpoint in the schema!
    'SECURITY': [],

    # Postprocessing functions that run at the end of schema generation.
    # must satisfy interface result = hook(generator, request, public, result)
    'POSTPROCESSING_HOOKS': [
        'drf_spectacular.hooks.postprocess_schema_enums',
    ],

    # Preprocessing functions that run before schema generation.
    # must satisfy interface result = hook(endpoints=result) where result
    # is a list of Tuples (path, path_regex, method, callback).
    # Example: 'drf_spectacular.hooks.preprocess_exclude_path_format'
    'PREPROCESSING_HOOKS': [],

    # Determines how operations should be sorted. If you intend to do sorting with a
    # PREPROCESSING_HOOKS, be sure to disable this setting. If configured, the sorting
    # is applied after the PREPROCESSING_HOOKS. Accepts either
    # True (drf-spectacular's alpha-sorter), False, or a callable for sort's key arg.
    'SORT_OPERATIONS': True,

    # enum name overrides. dict with keys "YourEnum" and their choice values "field.choices"
    # e.g. {'SomeEnum': ['A', 'B'], 'OtherEnum': 'import.path.to.choices'}
    'ENUM_NAME_OVERRIDES': {},
    # Adds "blank" and "null" enum choices where appropriate. disable on client generation issues
    'ENUM_ADD_EXPLICIT_BLANK_NULL_CHOICE': True,
    # Add/Append a list of (``choice value`` - choice name) to the enum description string.
    'ENUM_GENERATE_CHOICE_DESCRIPTION': True,

    # function that returns a list of all classes that should be excluded from doc string extraction
    'GET_LIB_DOC_EXCLUDES': 'drf_spectacular.plumbing.get_lib_doc_excludes',

    # Function that returns a mocked request for view processing. For CLI usage
    # original_request will be None.
    # interface: request = build_mock_request(method, path, view, original_request, **kwargs)
    'GET_MOCK_REQUEST': 'drf_spectacular.plumbing.build_mock_request',

    # Camelize names like "operationId" and path parameter names
    # Camelization of the operation schema itself requires the addition of
    # 'drf_spectacular.contrib.djangorestframework_camel_case.camelize_serializer_fields'
    # to POSTPROCESSING_HOOKS. Please note that the hook depends on
    # ``djangorestframework_camel_case``, while CAMELIZE_NAMES itself does not.
    'CAMELIZE_NAMES': False,

    # Determines if and how free-form 'additionalProperties' should be emitted in the schema. Some
    # code generator targets are sensitive to this. None disables generic 'additionalProperties'.
    # allowed values are 'dict', 'bool', None
    'GENERIC_ADDITIONAL_PROPERTIES': 'dict',

    # Path converter schema overrides (e.g. <int:foo>). Can be used to either modify default
    # behavior or provide a schema for custom converters registered with register_converter(...).
    # Takes converter labels as keys and either basic python types, OpenApiType, or raw schemas
    # as values. Example: {'aint': OpenApiTypes.INT, 'bint': str, 'cint': {'type': ...}}
    'PATH_CONVERTER_OVERRIDES': {},

    # Determines whether operation parameters should be sorted alphanumerically or just in
    # the order they arrived. Accepts either True, False, or a callable for sort's key arg.
    'SORT_OPERATION_PARAMETERS': True,

    # @extend_schema allows to specify status codes besides 200. This functionality is usually used
    # to describe error responses, which rarely make use of list mechanics. Therefore, we suppress
    # listing (pagination and filtering) on non-2XX status codes by default. Toggle this to enable
    # list responses with ListSerializers/many=True irrespective of the status code.
    'ENABLE_LIST_MECHANICS_ON_NON_2XX': False,

    # This setting allows you to deviate from the default manager by accessing a different model
    # property. We use "objects" by default for compatibility reasons. Using "_default_manager"
    # will likely fix most issues, though you are free to choose any name.
    "DEFAULT_QUERY_MANAGER": 'objects',

    # Controls which authentication methods are exposed in the schema. If not None, will hide
    # authentication classes that are not contained in the whitelist. Use full import paths
    # like ['rest_framework.authentication.TokenAuthentication', ...].
    # Empty list ([]) will hide all authentication methods. The default None will show all.
    'AUTHENTICATION_WHITELIST': None,
    # Controls which parsers are exposed in the schema. Works analog to AUTHENTICATION_WHITELIST.
    # List of allowed parsers or None to allow all.
    'PARSER_WHITELIST': None,
    # Controls which renderers are exposed in the schema. Works analog to AUTHENTICATION_WHITELIST.
    # rest_framework.renderers.BrowsableAPIRenderer is ignored by default if whitelist is None
    'RENDERER_WHITELIST': None,

    # Option for turning off error and warn messages
    'DISABLE_ERRORS_AND_WARNINGS': False,

    # Runs exemplary schema generation and emits warnings as part of "./manage.py check --deploy"
    'ENABLE_DJANGO_DEPLOY_CHECK': True,

    # General schema metadata. Refer to spec for valid inputs
    # https://spec.openapis.org/oas/v3.0.3#openapi-object
    'TITLE': 'Menus',
    'DESCRIPTION': 'Menus API Endpoints',
    'TOS': None,
    # Optional: MAY contain "name", "url", "email"
    'CONTACT': {},
    # Optional: MUST contain "name", MAY contain URL
    'LICENSE': {},
    # Statically set schema version. May also be an empty string. When used together with
    # view versioning, will become '0.0.0 (v2)' for 'v2' versioned requests.
    # Set VERSION to None if only the request version should be rendered.
    'VERSION': '1.0.0',
    # Optional list of servers.
    # Each entry MUST contain "url", MAY contain "description", "variables"
    # e.g. [{'url': 'https://example.com/v1', 'description': 'Text'}, ...]
    'SERVERS': [],
    # Tags defined in the global scope
    'TAGS': [],
    # Optional: MUST contain 'url', may contain "description"
    'EXTERNAL_DOCS': {},

    # Arbitrary specification extensions attached to the schema's info object.
    # https://swagger.io/specification/#specification-extensions
    'EXTENSIONS_INFO': {},

    # Arbitrary specification extensions attached to the schema's root object.
    # https://swagger.io/specification/#specification-extensions
    'EXTENSIONS_ROOT': {},

    # Oauth2 related settings. used for example by django-oauth2-toolkit.
    # https://spec.openapis.org/oas/v3.0.3#oauthFlowsObject
    'OAUTH2_FLOWS': [],
    'OAUTH2_AUTHORIZATION_URL': None,
    'OAUTH2_TOKEN_URL': None,
    'OAUTH2_REFRESH_URL': None,
    'OAUTH2_SCOPES': None,
}


#: Configures the Jazzmin Django Admin theme settings. This covers aspects like the theme, site title, login screen,
#: and other UI-related settings for Django Admin.
JAZZMIN_SETTINGS = {
    # title of the window (Will default to current_admin_site.site_title if absent or None)
    "site_title": "Menus",

    # Title on the login screen (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_header": "Menus",

    # Title on the brand (19 chars max) (defaults to current_admin_site.site_header if absent or None)
    "site_brand": "Menus",

    # Logo to use for your site, must be present in static files, used for brand on top left
    "site_logo": "images/logo.png",

    # Logo to use for your site, must be present in static files, used for login form logo (defaults to site_logo)
    "login_logo": "images/logo.png",

    # Logo to use for login form in dark themes (defaults to login_logo)
    "login_logo_dark": None,

    # CSS classes that are applied to the logo above
    "site_logo_classes": "img-circle",

    # Relative path to a favicon for your site, will default to site_logo if absent (ideally 32x32 px)
    "site_icon": "images/logo.png",

    # Welcome text on the login screen
    "welcome_sign": _("Welcome To Menus"),

    # Copyright on the footer
    "copyright": _("Menus Development Team"),

    # List of model admins to search from the search bar, search bar omitted if excluded
    # If you want to use a single search field you dont need to use a list, you can use a simple string
    "search_model": ["auth.User", 'restaurant.Restaurant'],

    # Field name on user model that contains avatar ImageField/URLField/Charfield or a callable that receives the user
    "user_avatar": None,

    ############
    # Top Menu #
    ############

    # Links to put along the top menu
    "topmenu_links": [

        # Url that gets reversed (Permissions can be added)
        {"name": _("Home"),  "url": "admin:index", "permissions": ["auth.view_user"]},
        {"name": _("API Docs"), "url": 'swagger_docs_view'},
        # model admin to link to (Permissions checked against model)
        {},
    ],

    #############
    # User Menu #
    #############

    # Additional links to include in the user menu on the top right ("app" url type is not allowed)
    "usermenu_links": [
    ],

    #############
    # Side Menu #
    #############

    # Whether to display the side menu
    "show_sidebar": True,

    # Whether to aut expand the menu
    "navigation_expanded": True,

    # Hide these apps when generating side menu e.g (auth)
    "hide_apps": [],

    # Hide these models when generating side menu (e.g auth.user)
    "hide_models": [],

    # List of apps (and/or models) to base side menu ordering off of (does not need to contain all apps/models)
    "order_with_respect_to": [],

    # Custom links to append to app groups, keyed on app name
    "custom_links": {
    },

    # Custom icons for side menu apps/models See https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2,5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # for the full list of 5.13.0 free icon classes
    "icons": {
        # "auth": "fas fa-users-cog",
        "auth.User": "fa-solid fa-users",
        "restaurant.Restaurant": "fa-solid fa-utensils",
        "restaurant.HeaderImage": "fa-regular fa-image",
        "restaurant.SocialMediaLink": "fa-solid fa-link",
        "restaurant.Category": "fa-solid fa-table",
        "restaurant.Product": "fa-solid fa-burger",
        "restaurant.ProductVariant": "fa-solid fa-plus",
        "restaurant.ProductType": "fa-solid fa-bowl-food",
        "info.MainInfo": "fa-solid fa-calendar-minus",
        "info.Service": "fa-solid fa-list",
        "info.ContactUs": "fas fa-headset"
    },
    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",

    #################
    # Related Modal #
    #################
    # Use modals instead of popups
    "related_modal_active": False,

    #############
    # UI Tweaks #
    #############
    # Relative paths to custom CSS/JS scripts (must be present in static files)
    "custom_css": "css/jazzmin.css",
    "custom_js": None,
    # Whether to link font from fonts.googleapis.com (use custom_css to supply font otherwise)
    "use_google_fonts_cdn": True,
    # Whether to show the UI customizer on the sidebar
    "show_ui_builder": False,

    ###############
    # Change view #
    ###############
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    # override change forms on a per modeladmin basis
    "changeform_format_overrides": {},
    # Add a language dropdown into the admin
    "language_chooser": True,
}


# CORS Origin Settings
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = [
    'origin',
    'x-csrftoken',
    'access-control-allow-origin',
    'accept-Language',
    'currency',
    "accept",
    "authorization",
    "content-type",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]
CORS_ALLOW_METHODS = [
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
]
