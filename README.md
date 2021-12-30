# Web Application with NLP :
Full-stack project in NLP using Django as a backend and Django rest framework as API with Bert model, the fronend is with React.js in 3 languages (English, Hebrew, Arabic).

## I assume you heard about Huggingface models based on transformers encoders and decoders:
<img src="https://aws1.discourse-cdn.com/standard14/uploads/hellohellohello/optimized/1X/06393b27a0cf04898288c7aba1f65322d1807eb6_2_690x372.png" width="30%" float="right" />
In this webiste our goal is to collect dataset for Hebrew and Arabic languages so we can do advanced NLU, like summarization and sentimental analysis.
The main problem is the lackage of dataset for Arabic and Hebrew languages to do tasks like summerization, i.e We can use BERT to summarize English text.
But what about summarizing Hebrew and Arabic texts? <div></div>
We can use google translate to translate the text from Hebrew to English and summarize it then to translate it back , this approach is good but it's not quit enough. In this site the main idea is to build a large dataset for Hebrew and Arabic languages , by submiting the data by the client, if the client evaluated the result to be good, then the result will be stored at the Database under the language that were choosen by the user.
then we can train Bert model on this dataset, and get very good accuracy of course.

# NLP WEB :
https://user-images.githubusercontent.com/58775369/147285132-ba586c73-0769-45e6-a132-418835cb677e.mov
## Example of Arabic NER:
![arab_ner](https://user-images.githubusercontent.com/58775369/147666812-74ebaa23-d972-4128-a2e7-1825b4e79f8c.jpeg)

## Example of English NER with Summarizer:
![Eng_ner_sum](https://user-images.githubusercontent.com/58775369/147666802-b7bce487-916f-40c5-9dbe-ede071b7d07d.jpeg)




## TODO list :
* Initialize the user's profile.
* Connected all nlp models to the app.
* improving the design.
* Adding Hebrew and Arabic languages.
* Trying to migrate big models like GPT-2.
* Adding Named Entity Recognition for Hebrew.
* Adding BIO-NER in English,Arabic and Hebrew.
* trying to find dataset to summarize Hebrew and Arabic.
* Adding ChatBox for Customers.
* Improving English NER dataset.
* Adding Mask completion for 3 languages.
* Adding Firebase/Djanjo SQLite3 to each language to collect data.
* Adding Mask Bert model for 3 languages.
* Adding summarizer in Arabic and Hebrew using TF-IDF/BagOfWords for client evaluation.
