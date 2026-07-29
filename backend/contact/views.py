import logging

from rest_framework import generics
from django.core.mail import send_mail
from django.conf import settings

from .models import ContactMessage
from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


class ContactCreateView(generics.CreateAPIView):

    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):

        # Always save the contact message first. The lead must never be
        # lost just because the notification email failed to send.
        contact = serializer.save()

        try:
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

                recipient_list=[
                    "vrpraveenkumar2003@gmail.com"
                ],

                # Never let an SMTP failure bubble up and turn a
                # successful DB save into a 500 error for the user.
                fail_silently=True,
            )
        except Exception:
            # Belt-and-braces: even with fail_silently=True some backends
            # can still raise (e.g. bad settings). Log it, don't crash.
            logger.exception(
                "Failed to send contact notification email for contact id=%s",
                contact.id,
            )