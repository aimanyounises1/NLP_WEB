import numpy as np
import torch
from transformers import pipeline
import pandas as pd
import copy
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

class Arabert_NER():
  def __init__(self):
    self.model = torch.load("/Users/aimanyounis/Downloads/NLP_WEB/WEB_NLP/backendapi/models/model.pth" , map_location=torch.device('cpu'))
    self.tokenizer , self.label_map = pd.read_pickle("/Users/aimanyounis/Downloads/NLP_WEB/WEB_NLP/backendapi/models/arab_tokenizer.pkl")
    self.nlp = pipeline('ner' , model = self.model , tokenizer= self.tokenizer , aggregation_strategy="max")

  
  def run_arab(self,text):
        with torch.no_grad():
            output1 = self.nlp(text)
        # Remove I and B     
        for entity in output1:
            index = entity['entity_group'][-1]
            if self.label_map[int(index)] != "O":
                entity['entity_group'] = self.label_map[int(index)][2:]
            else:
                entity['entity_group'] = self.label_map[int(index)]

        self.output = output1
        

class En_Ar_summary():
  def __init__(self):
    self.tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-ar",use_fast =False)
    self.model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-ar")
    self.nlp = pipeline(model = self.model , tokenizer = self.tokenizer)

  def run_sum(self, text):
    with torch.no_grad():
      self.result = self.nlp(text)
    print(self.result)




    
