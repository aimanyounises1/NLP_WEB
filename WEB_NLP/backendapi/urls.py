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
    path('home' , views.load_all_models , name="load_all_models"),
    path('ner' , views.ner , name="ner"),
    path('sum' , views.summarizer , name="summarizer"),
]