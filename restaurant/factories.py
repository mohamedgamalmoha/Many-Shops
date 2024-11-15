import random

import factory
from django.db import models
from django.contrib.auth import get_user_model

from .enums import SocialMediaPlatform
from .mixins import TranslatableFactoryMixin
from .models import Restaurant, HeaderImage, SocialMediaLink, Category, Product, ProductVariant


User = get_user_model()


class UserFactory(factory.django.DjangoModelFactory):
    email = factory.LazyAttribute(lambda obj: f'{obj.username}@example.com')
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    is_staff = False
    is_active = True
    password = factory.PostGenerationMethodCall('set_password', 'defaultpassword')

    class Meta:
        model = User

    @factory.lazy_attribute_sequence
    def username(self, n):
        max_pk = User.objects.aggregate(max_pk=models.Max('pk'))['max_pk'] or 0
        return f'user_{max(max_pk, n) + 1}'


class RestaurantFactory(TranslatableFactoryMixin, factory.django.DjangoModelFactory):
    owner = factory.SubFactory(UserFactory)
    name = factory.Faker('company')
    address = factory.Faker('address')
    city = factory.Faker('city')
    state = factory.Faker('state')
    zip_code = factory.Faker('postcode')
    description = factory.Faker('text', max_nb_chars=200)

    class Meta:
        model = Restaurant


class HeaderImageFactory(TranslatableFactoryMixin, factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    alt = factory.Faker('sentence', nb_words=10)
    image = factory.Faker('image')
    is_active = True
    url = factory.Faker('url')

    class Meta:
        model = HeaderImage


class SocialMediaLinkFactory(factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    platform = factory.LazyFunction(lambda: random.choices(
        SocialMediaPlatform.choices,
        weights=[20, 20, 20, 10, 10, 10, 10],
        k=1
    )[0][0])
    url = factory.Faker('url')
    is_active = True

    class Meta:
        model = SocialMediaLink


class CategoryFactory(TranslatableFactoryMixin, factory.django.DjangoModelFactory):
    restaurant = factory.SubFactory(RestaurantFactory)
    name = factory.Faker('name')
    is_active = True

    class Meta:
        model = Category


class ProductFactory(TranslatableFactoryMixin, factory.django.DjangoModelFactory):
    category = factory.SubFactory(CategoryFactory)
    name = factory.Faker('name')
    description = factory.Faker('text', max_nb_chars=200)
    price = factory.Faker('pydecimal')
    image = factory.Faker('image')
    is_active = True

    class Meta:
        model = Product


class ProductVariantFactory(TranslatableFactoryMixin, factory.django.DjangoModelFactory):
    product = factory.SubFactory(ProductFactory)
    name = factory.Faker('name')
    price = factory.Faker('pydecimal')

    class Meta:
        model = ProductVariant
