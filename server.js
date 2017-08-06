'use strict'
const express = require('express')
const server = express()
const bodyParser = require('body-parser');
const User = require('./models/user')

server.use(bodyParser.urlencoded())
server.use(bodyParser.json())

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.use(express.static(__dirname + '/app'));

server.get('/api/users', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log("Error: ", err)
        }
        res.json(users)
    })
})

server.post('/api/users', function(req, res){
	var user = new User({
		email: req.body.email,
		forename : req.body.forename,
		surname : req.body.surname
	})
	console.log("I am the new user")
	console.log(user)

	user.save(function (err, user) {
		if (err) {
			console.log("Error: ", err)
		}

		console.log("Data was saved in database")
		res.json(201, user)
	})
})

server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server