import factory
from faker import Faker

from .models import MainInfo, Service, AboutUs, Theme, ContactUs


fake = Faker()


class MainInfoFactory(factory.django.DjangoModelFactory):
    title = factory.Faker('sentence', nb_words=5)
    description = factory.Faker('text', max_nb_chars=500)
    image = factory.django.ImageField(width=600, height=300)

    class Meta:
        model = MainInfo


class ServiceFactory(factory.django.DjangoModelFactory):
    title = factory.Faker('sentence', nb_words=5)
    description = factory.Faker('text', max_nb_chars=500)
    image = factory.django.ImageField(width=300, height=300)
    is_active = factory.Faker('boolean')

    class Meta:
        model = Service


class AboutUsFactory(factory.django.DjangoModelFactory):
    title = factory.Faker('sentence', nb_words=5)
    description = factory.Faker('text', max_nb_chars=500)
    image = factory.django.ImageField(width=600, height=600)
    is_active = factory.Faker('boolean')

    class Meta:
        model = AboutUs


class ThemeFactory(factory.django.DjangoModelFactory):
    title = factory.Faker('sentence', nb_words=5)
    description = factory.Faker('text', max_nb_chars=500)
    image = factory.django.ImageField(width=600, height=300)
    is_active = factory.Faker('boolean')

    class Meta:
        model = Theme


class ContactUsFactory(factory.django.DjangoModelFactory):
    full_name = factory.Faker('name')
    email = factory.Faker('email')
    phone_number = factory.Faker('phone_number')
    message = factory.Faker('text', max_nb_chars=200)

    class Meta:
        model = ContactUs
