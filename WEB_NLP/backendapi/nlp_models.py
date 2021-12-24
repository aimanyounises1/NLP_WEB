from transformers import AutoTokenizer, AutoModelForTokenClassification
from transformers import pipeline
import json
import numpy as np

tokenizer = AutoTokenizer.from_pretrained("dslim/bert-base-NER")
model = AutoModelForTokenClassification.from_pretrained("dslim/bert-base-NER")

nlp = pipeline("ner", model=model, tokenizer=tokenizer)
example = """
Mr. Trump’s tweets began just moments after a Fox News report by Mike Tobin, a 
reporter for the network, about protests in Minnesota and elsewhere. 
"""



ner_results = nlp(example)
objects = []

def convert_results(allen_results):
        ents = set()
        for ent in allen_results:
            for key , value in ent.items():
                if key == "word" and value.startswith('##'):
                    ent[key] = value[2:]
                if key == "word":
                    word = ent['word']
                    entity = ent['entity']
                    if entity != "O":
                        ent_position, ent_type = entity.split("-")
                        if ent_position == "B":
                            w = word
                        elif ent_position == "I":
                            w += " " + word
                        elif ent_position == "L":
                            w += " " + word
                        ents.add((w,ent_type))

        return ents



print(convert_results(ner_results))
print(ner_results)

i = 0
for entity in ner_results:
    for key , value in entity.items():
        if key == "word":
            print(entity['word'])
            print(entity['entity'])

#ner_keys = list(ner_results[0].keys())
#object_keys = list(objects[0].keys())
#print(object_keys)
#print(ner_keys)

#print(f"Objects = {json.dumps(objects)}")
#print(ner_results)