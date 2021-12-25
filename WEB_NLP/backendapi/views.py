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
from .nlp_models import remove_I_B
import numpy as np
# Create your models here.

ner_model = None
tokenizer = None
sum = None
nlp =None
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def load_all_models(request):
    global tokenizer
    global ner_model
    global sum
    global nlp
    if ner_model is None and tokenizer is None and sum is None:
        print("> NER Model is Loading...")
        tokenizer = AutoTokenizer.from_pretrained("dslim/bert-base-NER")
        ner_model = AutoModelForTokenClassification.from_pretrained("dslim/bert-base-NER")
        nlp = pipeline("ner", model=ner_model,ignore_labels=[""], tokenizer=tokenizer)
        print("> SUM Model is loading... ")
        sum = pipeline("summarization")

    return HttpResponse(status = 200)

def update_result(result):
    pass

    
@api_view(['POST'])
def ner(request):
    print(request.data)
    global tokenizer
    global ner_model 
    global nlp
    sentence = request.data
    result = nlp(sentence)
    print(f"result = {result}")
    a = remove_I_B(result)
    a.convert_results()
    print('\n')
    print(a.allen_results)
    result =  a.allen_results
    # convert every float to double because it's not not supported json types;
    for entity in result:
        for key , value in entity.items():
            if type(value) == np.float32:
                entity[key] = np.double(value)

          
    return HttpResponse(json.dumps(result))


@api_view(['POST'])
def summarizer(request):
    global tokenizer
    global ner_model
    global sum
    print("Please wait we are summarizing")
    print(request.data)
    result = sum(request.data , max_length=512 , min_length=32 , do_sample = False)
    print(result)
    return HttpResponse(json.dumps(result))