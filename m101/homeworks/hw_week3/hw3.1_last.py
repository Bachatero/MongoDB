import pymongo
import sys
from pymongo import MongoClient


c = MongoClient()

#db=c.school
db=c.test
studs = db.students1

#student_score = db.grades.find({"type":"exam","score":{"$gte":65}}).sort("score",pymongo.ASCENDING).limit(1)
# mongo shell ... student_score = db.grades.find({"type":"homework"}).sort({"student_id":1,"score":1})

try:
  hw_score = studs.find({"scores.type":"homework"},{"scores":1,"type.homework.score":1})
  for riadok in hw_score:
    #if riadok["type"] == "homework":
    #print riadok["scores"]
    #index_to_remove = None
    low_score = None
    #print "novy riadok"
    for riadok1 in riadok["scores"]:
    #for indx, value in enumerate(riadok["scores"]):
          #print riadok1
          #if riadok1["type"] == "homework":
      if riadok1["type"] == "homework":
        #print riadok1["score"]
          #   if riadok1["score"] > high_score:
          #if value["type"] == "homework":
            #print indx, value["score"]      
            #if value["score"] < high_score or high_score is None:
            #print riadok1
        if riadok1["score"] < low_score or low_score is None:
               #index_to_remove = indx
          low_score = riadok1["score"]
          #print index_to_remove
    print "lower_score",low_score
    #print riadok["_id"]
    #hhh = riadok["_id"]
    #studs.update({"_id":159},{"$pull":{"scores":{"score":7.512188017365151}}})
    studs.update({"_id":riadok["_id"]},{"$pull":{"scores":{"score":low_score}}})
    #studs.insert({hhh,"country":"bu"})
   
except:
  print "s.t. went wrong"
  print "Unexpected error:", sys.exc_info()[0]
