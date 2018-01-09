
import pymongo
import sys
from pymongo import MongoClient


c = MongoClient()

db=c.students
grades = db.grades

#student_score = db.grades.find({"type":"exam","score":{"$gte":65}}).sort("score",pymongo.ASCENDING).limit(1)
# mongo shell ... student_score = db.grades.find({"type":"homework"}).sort({"student_id":1,"score":1})

try:
  #student_score = db.grades.find({"type":"homework"}).sort([("student_id", pymongo.ASCENDING),("score",pymongo.ASCENDING)]).limit(10)
  student_score = db.grades.find({"type":"homework"}).sort([("student_id", pymongo.ASCENDING),("score",pymongo.ASCENDING)])
  studentid = -1
  for riadok in student_score:
    #print riadok
    #if riadok["type"] == "homework":
      print riadok["student_id"], riadok["score"]
      if riadok["student_id"] != studentid:
        print "student change"  
        grades.remove(riadok["_id"])
        print "row removed"
      studentid = riadok["student_id"]
except:
  print "s.t. went wrong"
  print "Unexpected error:", sys.exc_info()[0]



