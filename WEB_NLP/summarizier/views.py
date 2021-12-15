from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm, UsernameField
# Create your views here.
def index(request):
    return render( request, 'summarizier/index.html')
