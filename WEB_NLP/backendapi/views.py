from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
# Create your models here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def index(request):
    pass
