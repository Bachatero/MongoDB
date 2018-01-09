use agg
db.products.aggregate([
    {$group:
     {
	 _id:"$manufacturer", 
	 num_products:{$sum:1}
     }
    }
])

Write the aggregation query that will find the number of products by category of a collection that has the form:

{
	"_id" : ObjectId("50b1aa983b3d0043b51b2c52"),
	"name" : "Nexus 7",
	"category" : "Tablets",
	"manufacturer" : "Google",
	"price" : 199
}

Have the resulting key be called "num_products," as in the video lesson. Hint, you just need to change which key you are aggregating on relative to the examples shown in the lesson.

Please double quote all keys to make it easier to check your result.

db.products.aggregate([
    {$group:
     {
         "_id":"$category",
         "num_products":{$sum:1}

    }
])


> db.stuff.find()
{ "_id" : ObjectId("50b26f9d80a78af03b5163c8"), "a" : 1, "b" : 1, "c" : 1 }
{ "_id" : ObjectId("50b26f9d80a78af03b5163c9"), "a" : 2, "b" : 2, "c" : 2 }
{ "_id" : ObjectId("50b26f9d80a78af03b5163ca"), "a" : 3, "b" : 3, "c" : 3 }
{ "_id" : ObjectId("50b26f9d80a78af03b5163cb"), "a" : 4, "b" : 4, "c" : 4 }

How many documents will be in the result set from aggregate? 
> db.stuff.aggregate([{$group:{_id:'$c'}}])
{ "_id" : 4 }
{ "_id" : 3 }
{ "_id" : 1 }
{ "_id" : 2 }


use agg
db.products.aggregate([
    {$group:
     {
	 _id: {
	     "maker":"$manufacturer"
	 },
	 sum_prices:{$sum:"$price"}
     }
    }
])


Write an aggregation query to sum up the population (pop) by state and put the result in a field called population. Don't use a compound _id key (you don't need one and the quiz checker is not expecting one). The collection name is zips. so something along the lines of db.zips.aggregate

 db.zips.aggregate([ {$group:{"_id":"$state",population:{$sum:"$pop"}}}])

# addToSet adds to an array only item which is not already in the array
use agg
db.products.aggregate([
    {$group:
     {
	 _id: {
	     "maker":"$manufacturer"
	 },
	 categories:{$addToSet:"$category"}
     }
    }
])

Given population data by zip code (postal code), write an aggregation expression to calculate the average population of a zip code (postal code) by state. This dataset only contains four states, and only 50 zip codes per state, because some browsers have trouble working with large data sets.

> db.zips.aggregate([ {$group:{"_id":"$state",average_pop:{$avg:"$pop"}}}])


Write an aggregation query that will return the postal codes that cover each city. The results should look like this:

		{
			"_id" : "CENTREVILLE",
			"postal_codes" : [
				"22020",
				"49032",
				"39631",
				"21617",
				"35042"
			]
		},

db.zips.aggregate([ {$group:{"_id":"$city",postal_codes:{$addToSet:"$_id"}}}])


# $push adds item to array,but it does not guarantee that it adds each item only once as addToSet does .
# duplicates may occur


db.zips.aggregate([{"$group":{"_id":"$city", "postal_codes":{"$push":"$_id"}}}])
db.zips.aggregate([{"$group":{"_id":"$city", "postal_codes":{"$addToSet":"$_id"}}}])

use agg
db.products.aggregate([
    {$group:
     {
	 _id: {
	     "maker":"$manufacturer"
	 },
	 max_prices:{$max:"$price"}
     }
    }
])


 write an aggregation query that will return the population of the postal code in each state with the highest population. It should return output that looks like this:

{
			"_id" : "WI",
			"pop" : 57187
		},
		{
			"_id" : "WV",
			"pop" : 70185
		},
db.zips.aggregate([{$group:{"_id":"$state","pop":{"$max":"$pop"}}}])

