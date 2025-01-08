from django.db import models
from django.contrib.auth.backends import get_user_model

import factory


User = get_user_model()


class UserFactory(factory.django.DjangoModelFactory):
    email = factory.LazyAttribute(lambda obj: f'{obj.username}@example.com')
    full_name = factory.Faker('name')
    phone_number = factory.Faker('phone_number')
    is_active = True
    password = factory.PostGenerationMethodCall('set_password', 'defaultpassword')

    @factory.lazy_attribute_sequence
    def username(self, n):
        max_pk = User.objects.aggregate(max_pk=models.Max('pk'))['max_pk'] or 0
        return f'user_{max(max_pk, n) + 1}'

    class Meta:
        model = User
