Again, thinking about the zipcode collection, write an aggregation query with a single match phase that filters for zipcodes with greater than 100,000 people.
 db.zips.aggregate([ {$match:{pop:{"$gt":100000}} }  ])
