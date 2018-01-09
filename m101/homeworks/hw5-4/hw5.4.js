Removing Rural Residents
In this problem you will calculate the number of people who live in a zip code in the US where the city starts with a digit. We will take that to mean they don't really live in a city. Once again, you will be using the zip code collection, which you will find in the 'handouts' link in this page. Import it into your mongod using the following command from the command line:

> mongoimport -d test -c zips1 < zips.json


If you imported it correctly, you can go to the test database in the mongo shell and conform that

> db.zips1.count()


yields 29,467 documents.

The project operator can extract the first digit from any field. For example, to extract the first digit from the city field, you could write this query:

db.zips1.aggregate([
    {$project: 
     {
	first_char: {$substr : ["$city",0,1]},
     }	 
   }
])

Using the aggregation framework, calculate the sum total of people who are living in a zip code where the city starts with a digit. Choose the answer below.

Note that you will need to probably change your projection to send more info through than just that first character. Also, you will need a filtering step to get rid of all documents where the city does not start with a digital (0-9).


# different match notation:

db.zips1.aggregate([     {$project : {"_id":"$_id",city:"$city",pop:"$pop"}},{$match: {city:{$regex:'[0-9]'}}},{$group:{"_id":null, suma:{$sum:"$pop"}}} ])


or 

db.zips1.aggregate([{$project:{ first_char: {$substr : ["$city",0,1]}, pop:"$pop"}}, {$match:{first_char:{$in:["0","1","2","3","4","5","6","7","8","9"]}}} , {$group:{"_id":null, suma:{$sum:"$pop"}}}])

or

 db.zips1.aggregate([{$project :{city:{$substr:["$city",0,1]},pop:"$pop"}}, {$match: {city: {$gte:'0',$lte:'9'}}}, {$group:{"_id":null,suma:{$sum:"$pop"}}} ]);

