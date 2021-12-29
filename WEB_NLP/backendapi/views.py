import json
from warnings import simplefilter
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
from .run_arab import Arabert_NER
# Create your models here.

ner_model = None
tokenizer = None
sum = None
nlp = None
colors_en = {"PER": "#ff9999","MISC": "#ffff80","ORG":" #ff80ff" , "LOC":"#7070db"}
colors_ar = {"PERS": "#ff9999","MISC": "#ffff80","ORG":" #ff80ff" , "LOC":"#7070db"}
colors_he = {"PERS": "#ff9999","MISC": "#ffff80","ORG":" #ff80ff" , "LOC":"#7070db"}


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
        nlp = pipeline("ner", model=ner_model , ignore_labels=[""], tokenizer=tokenizer, aggregation_strategy="max")
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
    arabert  = Arabert_NER()
    sentence = request.data['input']
    option =  request.data['op']
    lan = request.data['lan']
    if lan == 3:
        arabert.run_arab(sentence)
        result =  arabert.output

    else:
        result = nlp(sentence) 

    for entity in result:
        for key , value in entity.items():
            if type(value) == np.float32:
                entity[key] = np.double(value)
        if entity['entity_group'] != "O" and lan != 3: 
            entity["COLOR"] = colors_en[entity['entity_group']]
        elif entity['entity_group'] != "O" and lan == 3:
            entity["COLOR"] = colors_ar[entity['entity_group']]

    print(result)
    return HttpResponse(json.dumps(result))


@api_view(['POST'])
def summarizer(request):
    global tokenizer
    global ner_model
    global sum
    print("Please wait we are summarizing")
    print(request.data['input'])
    result = sum(request.data['input'] , max_length=512, min_length=10 , do_sample = False)
    print(result)
    return HttpResponse(json.dumps(result))