db.zips.aggregate([{$project:{ "_id":0, city: {"$toLower":"$city"}, pop:"$pop", state:"$state", zip:"$_id"  } }])
or
db.zips.aggregate([{$project:{ "_id":0, city: {"$toLower":"$city"}, pop:1, state:1, zip:"$_id"  } }])
