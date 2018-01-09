Please use the Enron dataset you imported for the previous problem. For this question you will use the aggregation framework to figure out pairs of people that tend to communicate a lot. To do this, you will need to unwind the To list for each message.

This problem is a little tricky because a recipient may appear more than once in the To list for a message. You will need to fix that in a stage of the aggregation before doing your grouping and counting of (sender, recipient) pairs.

Which pair of people have the greatest number of messages in the dataset?
susan.mara@enron.com to jeff.dasovich@enron.com 
susan.mara@enron.com to richard.shapiro@enron.com 
soblander@carrfut.com to soblander@carrfut.com 
susan.mara@enron.com to james.steffes@enron.com 
evelyn.metoyer@enron.com to kate.symes@enron.com 
susan.mara@enron.com to alan.comnes@enron.com 


#?solution 

step1 - find recipients with multiple entries in the To: address list 
##db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"headers.From" : "susan.mara@enron.com"}},{"$project":{"_id":0, headerrs_from:"$headers.From", headerss_to:"$headers.To","filen":"$filename"}},{$group:{"_id":{filen:"$filen",headerss_to:"$headerss_to"},"pocet":{$sum:1}  }},{$sort:{pocet:-1}} ])

step1 - group by document and addressee
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"headers.From" : "susan.mara@enron.com"}},{"$project":{ headerrs_from:"$headers.From", headerss_to:"$headers.To","filen":"$filename"}},{$group:{"_id":{_id:"$_id",headerss_to:"$headerss_to"},"pocet":{$sum:1}  }},{$sort:{pocet:-1}} ])


####################################
#mara -> jeff.dasovich distinct

db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"jeff.dasovich@enron.com" }]  }}, {"$project":{"_id":"$_id", headerrs_from:"$headers.From", headerss_to:"$headers.To"}},{$group:{"_id":{_id:"$_id",head_from:"$headerrs_from",head_to:"$headerss_to"}  }}, {$group:{"_id":{hd_from:"$head_from",hd_to:"$head_to"},"pocet":{$sum:1}} }  ])
{ "_id" : {  }, "pocet" : 750 }

db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"jeff.dasovich@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
{ "_id" : null, "suma" : 750 }

> 

####################################
# mara->richard.shapiro all

db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"richard.shapiro@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":null,"suma":{$sum:1}} }   ] )
{ "_id" : null, "suma" : 974 }

#mara->richard.shapiro distinct
 db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"richard.shapiro@enron.com" }]  }}, {"$project":{"_id":"$_id", headerrs_from:"$headers.From", headerss_to:"$headers.To"}},{$group:{"_id":{_id:"$_id",head_from:"$headerrs_from",head_to:"$headerss_to"}  }}, {$group:{"_id":{hd_from:"$head_from",hd_to:"$head_to"},"pocet":{$sum:1}} }  ])
{ "_id" : {  }, "pocet" : 616 

#mara->richard.shapiro distinct -alternative 2
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"richard.shapiro@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
{ "_id" : null, "suma" : 616 }


####################################
#mara -> james.steffes  distinct
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"james.steffes@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
{
{ "_id" : null, "suma" : 646 }

####################################
#mara -> alan.comnes distinct
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"alan.comnes@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
i{ "_id" : null, "suma" : 550 }

####################################
#soblander@carrfut.com -> soblander@carrfut.com 
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "soblander@carrfut.com"},{"headers.To":"soblander@carrfut.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
{ "_id" : null, "suma" : 679 }

####################################
#evelyn.metoyer@enron.com to kate.symes@enron.com 
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "evelyn.metoyer@enron.com"},{"headers.To":"kate.symes@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$group:{"_id":{"_id":"$_id","head_to":"$head_to"}} } ,{$group:{"_id":null,suma:{$sum:1} } }  ] )
{
{ "_id" : null, "suma" : 567 }

####################################



# preparation
db.messages.aggregate([{ "$unwind" : "$headers.To" },{$match:{"$and": [{"headers.From" : "susan.mara@enron.com"},{"headers.To":"jeff.dasovich@enron.com" }]  }} , {$project:{_id:"$_id","head_from":"$headers.From","head_to":"$headers.To"}}, {$out:"mess1"}  ] )


db.runCommand( { distinct: "mess1", key:"_id"})

