var graf = require('levelgraph')

var db = graf('somedb')

var tuple = {subject:'a', predicate:'b', object:'c'}

db.put(tuple, function(err){
	console.error(err)
})
