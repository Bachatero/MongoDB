import pymongo
from pymongo.mongo_client import MongoClient

connection = MongoClient('localhost',27017)

db = connection.test

names=db.names

item = names.find_one()

print item['shit']
