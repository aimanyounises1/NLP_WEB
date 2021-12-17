from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from .views import UserViewSet
router = routers.DefaultRouter()
router.register('users' , UserViewSet)
urlpatterns = [
    path('' , include(router.urls)),
    path('ner' , views.index , name="index"),
    path('sum' , views.summarizer , name="summarizer"),
]