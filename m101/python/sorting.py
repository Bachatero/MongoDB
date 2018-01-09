{ "_id" : 0, "value" : 10 }
{ "_id" : 2, "value" : 5 }
{ "_id" : 3, "value" : 7 }
{ "_id" : 4, "value" : 20 }

If you performed the following query in pymongo:

cursor = things.find().skip(3).limit(1).sort('value',pymongo.DESCENDING)

