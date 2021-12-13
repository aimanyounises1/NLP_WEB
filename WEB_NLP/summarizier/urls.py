from django.urls import path
from . import views


urlpatterns = [
    path("" , views.index , name ="name"),
    path("summarize/" , views.summarize , name = "summarize")

]