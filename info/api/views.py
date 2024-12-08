from rest_framework.permissions import AllowAny
from rest_framework.generics import RetrieveAPIView, CreateAPIView, ListAPIView

from ..models import MainInfo, Service
from .serializer import MainInfoSerializer, ServiceSerializer, ContactUsSerializer


class MainInfoAPIView(RetrieveAPIView):
    queryset = MainInfo.objects.all()
    serializer_class = MainInfoSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return self.get_queryset().first()


class ServiceAPIView(ListAPIView):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]


class ContactUsAPIView(CreateAPIView):
    serializer_class = ContactUsSerializer
    permission_classes = [AllowAny]
