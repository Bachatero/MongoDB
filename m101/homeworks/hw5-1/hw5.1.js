In this assignment you will use the aggregation framework to find the most frequent author of comments on your blog. We will be using a data set similar to ones we've used before. 

db.posts.aggregate([{$unwind:"$comments"},{$group:{"_id":"$comments.author","sum_comment":{$sum:1}}},{$sort:{sum_comment:-1}}])

