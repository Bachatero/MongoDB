Crunching the Zipcode dataset
Please calculate the average population of cities in California (abbreviation CA) and New York (NY) (taken together) with populations over 25,000.

For this problem, assume that a city name that appears in more than one state represents two separate cities.

Please round the answer to a whole number.
Hint: The answer for CT and NJ (using this data set) is 38177.

Please note:

    Different states might have the same city name.
    A city might have multiple zip codes.

mongoimport -d test -c smallzips --drop small_zips.json

db.smallzips.aggregate([{$match:{ $or:[ {state:"CA"}, {state:"NY"}]}},{$group:{"_id":{state:"$state", city:"$city"}, sum_pop:{"$sum":"$pop"}}}, {$sort:{"sum_pop":-1}} ,{$match:{sum_pop:{$gt:25000 }}}, {$group:{"_id":"$state",avg:{"$avg":"$sum_pop"} }} ])
