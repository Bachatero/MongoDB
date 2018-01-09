# create compound index -- so called multikey index
# hw 4.3 to make the page that displays blog posts by tags fast
db.posts.ensureIndex({tags:1,date:1})
db.posts.find({tags:"pasta"},{"tags":1,"date":1,"_id":0})
db.posts.find({tags:"pasta"},{"tags":1,"date":1,"_id":0}).explain()

# hw 4.3 the page that displays a blog entry by permalink
db.posts.ensureIndex({permalink:1},{unique:true})
db.posts.find({permalink:"itCcZDaGDaJTmjkKIzDO"},{permalink:1,"_id":0}).explain()

# hw 4.3 to make blog homepage fast
db.posts.ensureIndex({date:-1})
db.posts.find({"date":ISODate("2012-11-20T05:05:16.810Z")},{date:1,"_id":0}).explain()

