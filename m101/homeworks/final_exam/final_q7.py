import pymongo
import sys
from pymongo import MongoClient


c = MongoClient()

db=c.q7
#db=c.test
imgs = db.images

test = None
try:

  #test=db.albums.find_one({"images":{ "$in":[9899799]}} )
  #print test
  
  all_imgs=imgs.find({})#.limit(1000)
  for oneimage in all_imgs:
  #   print oneimage["_id"]
      test=db.albums.find_one({"images":{ "$in":[oneimage["_id"]]}} )
      if test is None:
	 #print "no album for image:", oneimage 
         db.images.remove({"_id":oneimage["_id"]})
      test = None
     
  #hw_score = studs.find({"scores.type":"homework"},{"scores":1,"type.homework.score":1})
  #for riadok in hw_score:
  #  low_score = None
  #  for riadok1 in riadok["scores"]:
  #    if riadok1["type"] == "homework":
  #      if riadok1["score"] < low_score or low_score is None:
  #        low_score = riadok1["score"]
  #  print "lower_score",low_score
  #  studs.update({"_id":riadok["_id"]},{"$pull":{"scores":{"score":low_score}}})
   
except:
  print "s.t. went wrong"
  print "Unexpected error:", sys.exc_info()[0]
