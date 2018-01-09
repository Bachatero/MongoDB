
import pymongo
import sys
from pymongo import MongoClient

# get a handle to the school database

c = MongoClient()

db=c.school
people = db.people

#def del():
#  db.people.remove()

#doc = {"name":"Andrew Erlichson", "company":"10gen",
#              "interests":['running', 'cycling', 'photography']}

doc = {"_id":"berger","name":"Andrew Erlichson", "company":"10gen",
              "interests":['running', 'cycling', 'photography']}
try:
        doc = {"_id":"berger","name":"Andrew Erlichson", "company":"10gen",
              "interests":['running', 'cycling', 'photography']}

        people.insert(doc)   # first insert
        #del(doc['_id'])
        doc = {"_id":"berger1","name":"Andrew Erlichson", "company":"10gen",
              "interests":['running', 'cycling', 'photography']}

	#people.remove('_id')
        people.insert(doc)   # second insert

except:
        print "Unexpected error:", sys.exc_info()[0]
