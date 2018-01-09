
import pymongo
import sys
from pymongo import MongoClient

# establish a connection to the database
#connection = pymongo.Connection("mongodb://localhost", safe=True)

c = MongoClient()

# get a handle to the reddit database
db=c.reddit
stories = db.stories


def find():

    print "find, reporting for duty"

    #query = {'media.oembed.type':'video'}
    query = {'media.oembed.type':'rich'}
    projection = {'media.oembed.url':1, '_id':0}

    try:
        iter = stories.find(query, projection)
        #iter = stories.find(query)

    except:
        print "Unexpected error:", sys.exc_info()[0]

    sanity = 0
    for doc in iter:
        print doc
        sanity += 1
        if (sanity > 100):
            break
        

find()

