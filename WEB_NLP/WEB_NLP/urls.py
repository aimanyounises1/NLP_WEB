
from django.contrib import admin
from django.urls import path , include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('summarizier/',  include('summarizier.urls')),
    path('backendapi/' , include('backendapi.urls')),
    path('auth/', obtain_auth_token) # the obtain auth token is HttpResponse with the token
]
