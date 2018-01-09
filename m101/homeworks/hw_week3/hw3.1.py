import pymongo
import sys
from pymongo import MongoClient


c = MongoClient()

db=c.school
grades = db.students

#student_score = db.grades.find({"type":"exam","score":{"$gte":65}}).sort("score",pymongo.ASCENDING).limit(1)
# mongo shell ... student_score = db.grades.find({"type":"homework"}).sort({"student_id":1,"score":1})

try:
  hw_score = db.students.find({"scores.type":"homework"},{"scores":1,"type.homework.score":1})
  for riadok in hw_score:
    #if riadok["type"] == "homework":
    #print riadok["scores"]
    index_to_remove = None
    high_score = None
    #for riadok1 in riadok["scores"]:
    for indx, value in enumerate(riadok["scores"]):
          #print riadok1
          #if riadok1["type"] == "homework":
          #if riadok1["type"] == "homework":
          #   print riadok1["score"]
          #   if riadok1["score"] > high_score:
          if value["type"] == "homework":
            print indx, value["score"]      
            if value["score"] < high_score or high_score is None:
               index_to_remove = indx
               high_score = value["score"]
          print index_to_remove
   
except:
  print "s.t. went wrong"
  print "Unexpected error:", sys.exc_info()[0]
