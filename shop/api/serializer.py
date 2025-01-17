from decimal import Decimal

from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from accounts.api.serializer import UserSerializer
from .mixins import DefaultImageSerializerMixin
from ..models import Shop, HeaderImage, SocialMediaLink, Category, Product, ProductImage
from ..constants import DEFAULT_SHOP_IMAGE_URL, DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL


class HeaderImageSerializer(DefaultImageSerializerMixin, serializers.ModelSerializer):
    default_image_url = DEFAULT_HEADER_IMAGE_URL

    class Meta:
        model = HeaderImage
        exclude = ('shop', )
        read_only_fields = ('create_at', 'update_at')


class SocialMediaLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ('shop', )
        read_only_fields = ('create_at', 'update_at')


class ShopSerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    owner = UserSerializer(many=False)
    header_images = HeaderImageSerializer(many=True)
    social_media_links = SocialMediaLinkSerializer(many=True)
    default_image_url = DEFAULT_SHOP_IMAGE_URL

    class Meta:
        model = Shop
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'owner': (UserSerializer, {'many': False, "omit": ["restaurants"]}),
            'header_images': (HeaderImageSerializer, {'many': True, "omit": ["restaurant"]}),
            'social_media_links': (SocialMediaLinkSerializer, {'many': True, "omit": ["restaurant"]}),
        }


class PorductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        exclude = ()
        read_only_fields = ('create_at', 'update_at')


class ProductSerializer(HeaderImageSerializer, FlexFieldsModelSerializer):
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL
    price_after_seal = serializers.SerializerMethodField()

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'product_images': (PorductImageSerializer, {'many': True, "omit": ["product"]}),
        }

    def get_price_after_seal(self, obj) -> Decimal:
        if not (obj and obj.price and obj.seal_percentage):
            return 0.0
        discount = (obj.price * obj.seal_percentage) / 100
        return obj.price - discount

 
class CategorySerializer(DefaultImageSerializerMixin, FlexFieldsModelSerializer):
    products = ProductSerializer(many=True)
    default_image_url = DEFAULT_PRODUCT_IMAGE_URL

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'products': (ProductSerializer, {'many': True, "omit": ["category"]}),
        }
