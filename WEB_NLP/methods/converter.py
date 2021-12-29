# importing library
import csv

# Open tsv and txt files(open txt file in write mode)
tsv_file = open("/Users/aimanyounis/Downloads/NLP_WEB/WEB_NLP/methods/train_disease.tsv")
txt_file = open("train_disease.txt", "w")

# Read tsv file and use delimiter as \t. csv.reader
# function retruns a iterator
# which is stored in read_csv
read_tsv = csv.reader(tsv_file, delimiter="\t")

# write data in txt file line by line
for row in read_tsv:
	joined_string = "\t".join(row)
	txt_file.writelines(joined_string+'\n')

# close files
txt_file.close()
