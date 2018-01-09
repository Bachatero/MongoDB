
import pymongo
import sys
from pymongo import MongoClient

# get a handle to the school database

c = MongoClient()

db=c.students
grades = db.grades

student_score = db.grades.find({"type":"exam","score":{"$gte":65}}).sort("score",pymongo.ASCENDING).limit(1)

for riadok in student_score:
   print riadok



#print student_score
