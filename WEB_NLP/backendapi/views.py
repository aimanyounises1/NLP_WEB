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
sum = None
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
    return HttpResponse(json.dumps(str(result)))


@api_view(['POST'])
def summarizer(request):
    print("inside the summary")
    print(request.data)
    global sum
    result = ""
    if sum is None:
        print("> Sum model loading ")
        sum = pipeline("summarization")
    result = sum(request.data , max_length=130 , min_length=30 , do_sample = False)
    print(result)
    return HttpResponse(json.dumps(result))