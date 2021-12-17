import json
from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from transformers import pipeline
from django.http import HttpResponse,JsonResponse
from transformers import AutoTokenizer , AutoModelForTokenClassification
import json
# Create your models here.

model = None
tokenizer = None
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def index(request):
    global tokenizer 
    global model 
    result = ""
    print(request.data)
    if model is None and tokenizer is None:
        print("> Model is Loaded")
        tokenizer = AutoTokenizer.from_pretrained("dslim/bert-base-NER")
        model = AutoModelForTokenClassification.from_pretrained("dslim/bert-base-NER")

    nlp = pipeline("ner", model=model, tokenizer=tokenizer)
    sentence = request.data
    result = nlp(sentence)
    print(result)   

    return JsonResponse(str(result) , safe=False)