import pymongo
from pymongo import MongoClient

c = MongoClient()
db = c.test

def find():
   print "ok"
   query = {"name":"magor","salary":{"$lt":7000}}
   stlpce = {"_id":0}
 
   try:
     looping = db.bergers.find(query,stlpce)
     for riadok in looping:
       #print riadok,'\n'
       print riadok,'\n'

   except:
     print "stal sa nejaky bazmeg"


find()
