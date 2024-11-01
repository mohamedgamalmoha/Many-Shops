from django.contrib.auth.backends import get_user_model
from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from ..models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant
from ..constants import DEFAULT_HEADER_IMAGE_URL, DEFAULT_PRODUCT_IMAGE_URL


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('password', 'is_superuser', 'is_staff', 'groups', 'user_permissions')


class HeaderImageSerializers(serializers.ModelSerializer):

    class Meta:
        model = HeaderImage
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            representation['image'] = DEFAULT_HEADER_IMAGE_URL

        return representation


class SocialMediaLinkSerializers(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaLink
        exclude = ('restaurant', )
        read_only_fields = ('create_at', 'update_at')


class RestaurantSerializers(FlexFieldsModelSerializer):
    owner = UserSerializer(many=False)
    header_images = HeaderImageSerializers(many=True)
    social_media_links = SocialMediaLinkSerializers(many=True)

    class Meta:
        model = Restaurant
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'owner': (User, {'many': False, "omit": ["restaurants"]}),
            'header_images': (HeaderImageSerializers, {'many': True, "omit": ["restaurant"]}),
            'social_media_links': (SocialMediaLinkSerializers, {'many': True, "omit": ["restaurant"]}),
        }


class ProductVariantSerializers(serializers.ModelSerializer):

    class Meta:
        model = ProductVariant
        exclude = ('product', )
        read_only_fields = ('create_at', 'update_at')


class ProductSerializers(FlexFieldsModelSerializer):
    variants = ProductVariantSerializers(many=True)

    class Meta:
        model = Product
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'variants': (ProductVariantSerializers, {'many': True, "omit": ["product"]}),
        }

    def to_representation(self, instance):
        # Use the original to_representation method to get the initial representation
        representation = super().to_representation(instance)

        if not representation.get('image', None):
            representation['image'] = DEFAULT_PRODUCT_IMAGE_URL

        return representation


class CategorySerializer(FlexFieldsModelSerializer):
    products = ProductSerializers(many=True)

    class Meta:
        model = Category
        exclude = ()
        read_only_fields = ('create_at', 'update_at')
        expandable_fields = {
            'products': (ProductSerializers, {'many': True, "omit": ["category"]}),
        }
