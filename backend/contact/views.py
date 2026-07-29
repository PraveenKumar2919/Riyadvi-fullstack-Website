from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings

from .models import ContactMessage
from .serializers import ContactSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        contact = serializer.save()

        send_mail(
            subject=f"New Contact Message from {contact.name}",
            message=f"""
Name: {contact.name}

Email: {contact.email}

Phone: {contact.phone}

Message:
{contact.message}
""",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=["vrpraveenkumar2003@gmail.com"],
            fail_silently=False,
        )