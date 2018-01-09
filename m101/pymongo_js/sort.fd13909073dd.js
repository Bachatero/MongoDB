use agg
db.zips.aggregate([
    {$match:
     {
	 state:"NY"
     }
    },
    {$group:
     {
	 _id: "$city",
	 population: {$sum:"$pop"},
     }
    },
    {$project:
     {
	 _id: 0,
	 city: "$_id",
	 population: 1,
     }
    },
    {$sort:
     {
	 population:-1
     }
    }
      
    
     
])

#  Write an aggregation query with just a sort stage to sort by (state, city), both ascending. Assume the collection is called zips.

db.zips.aggregate([ {$sort:{state:1,city:1,} }  ])
