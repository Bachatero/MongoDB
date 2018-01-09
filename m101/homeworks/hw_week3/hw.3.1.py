import pymongo
import sys
from pymongo import MongoClient


c = MongoClient()

db=c.school
#db=c.test
studs = db.students

#student_score = db.grades.find({"type":"exam","score":{"$gte":65}}).sort("score",pymongo.ASCENDING).limit(1)
# mongo shell ... student_score = db.grades.find({"type":"homework"}).sort({"student_id":1,"score":1})

try:
  hw_score = studs.find({"scores.type":"homework"},{"scores":1,"type.homework.score":1})
  for riadok in hw_score:
    low_score = None
    for riadok1 in riadok["scores"]:
      if riadok1["type"] == "homework":
        if riadok1["score"] < low_score or low_score is None:
          low_score = riadok1["score"]
    print "lower_score",low_score
    studs.update({"_id":riadok["_id"]},{"$pull":{"scores":{"score":low_score}}})
   
except:
  print "s.t. went wrong"
  print "Unexpected error:", sys.exc_info()[0]
