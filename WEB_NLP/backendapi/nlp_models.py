import copy


class remove_I_B():
    def __init__(self, ner_results):
        self.allen_results = ner_results


    def convert_results(self):    
            for ent in self.allen_results:
                for key , value in ent.items():
                    if key == "word" and value is not "O":
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
                                ent['word'] = w
                                ent['entity'] = ent_type

            for entity in copy.copy(self.allen_results):
                for entity2 in copy.copy(self.allen_results):
                    for key , value in entity.items():
                        for key2 , value2 in entity2.items():
                            if key == "word"  and key2 == "word" and value2 == value:
                                continue
                            elif key == "word" and key2 =="word" and len(key) and len(key2) and value2 in value:
                                self.allen_results.remove(entity2)
                                pass
                            else:
                                continue



