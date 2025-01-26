from django.templatetags.static import static


DEFAULT_SHOP_IMAGE_URL = static('images/default_shop.png')
DEFAULT_HEADER_IMAGE_URL = static('images/default_header.png')
DEFAULT_PRODUCT_IMAGE_URL = static('images/default_product.png')
DEFAULT_THEME_IMAGE_URL = static('images/default_theme.png')
FORCED_IMAGE_FORMAT = 'WEBP'
MAX_FILE_SIZE = 20 * 1024 * 1024  # 20 MB
SHOP_LIST_VIEW_TIMEOUT = 60 * 60 * 4  # 60s * 60m * 4h
SHOP_DETAIL_VIEW_TIMEOUT = 60 * 60 * 4  # 60s * 60m * 4h
SHOP_CATEGORY_VIEW_TIMEOUT = 60 * 60 * 4  # 60s * 60m * 4h
CATEGORY_DETAIL_VIEW_TIMEOUT = 60 * 60 * 4  # 60s * 60m * 4h
NEW_PRODUCT_DAYS = 10
