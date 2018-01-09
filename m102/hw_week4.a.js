mkdir /data/1
mkdir /data/2
mkdir /data/3

#start primary replica set
mongod --dbpath 1 --port 27001 --smallfiles --oplogSize 50 --replSet bazmeg

# initialize replication on primary using configuration or let mongod create one based on server's hostname 

rs.initiate()

# show status of replication
rs.status()

# starting secondary replica set mongod server on port 27002
mongod --dbpath 2 --port 27002 --smallfiles --oplogSize 50 --replSet bazmeg

# adding another member of replica set from the mongo shell attached to primary mongod replica set
rs.add("bachatero:27002")

# starting another secondary replica set mongod server on port 27003
mongod --dbpath 3 --port 27003 --smallfiles --oplogSize 50 --replSet bazmeg

# adding another member of replica set from the mongo shell attached to primary mongod replica set
rs.add("bachatero:27003")


#Once a secondary has spun up, you can connect to it with a new mongo shell instance. Use

rs.slaveOk()

#to let the shell know you're OK with (potentially) stale data, and run some queries. You can also insert data on your primary and then read it out on your secondary.


#step down as primary (momentarily) (disconnects)

rs.stepDown()

# reconfigure on new primary to remove the old primary member,
#either use rs.reconfig() with your new configuration that does not contain the first member, or rs.remove(), specifying the host:port of the server you wish to remove as a string for the input.

rs.remove("bachatero:27001")

# and check new status

rs.status()


####################################################################################
# hw 4.5.

# check the oplog on secondary node in the replica set

db.oplog.rs.find()

# look at the stats on the oplog to get a feel for its size:

db.oplog.rs.stats()
R

db.oplog.rs.find( { } ).sort( { $natural : 1 } ).limit( 1 ).next( ).o.msg[0]
