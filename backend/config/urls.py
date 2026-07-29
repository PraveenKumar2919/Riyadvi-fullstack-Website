from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
def home(request):
    return JsonResponse({
        "status": "success",
        "message": "Riyadvi Backend API is running 🚀"
    })

urlpatterns = [
path("", home),

    path(
        "admin/",
        admin.site.urls
    ),

    path(
        "api/blogs/",
        include("blogs.urls")
    ),
path(
    "api/careers/",
    include("careers.urls")
),
path(
    "api/contact/",
    include("contact.urls")
),
]