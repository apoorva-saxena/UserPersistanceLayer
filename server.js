'use strict'
const express = require('express')
const server = express()
const bodyParser = require('body-parser');
const User = require('./models/user')
const _ = require('lodash')
const port =  process.env.PORT || 8080

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

server.post('/api/users', function(req, res) {
    var user = new User({
        email: req.body.email,
        forename: req.body.forename,
        surname: req.body.surname
    })
    console.log("I am the new user")
    console.log(user)

    user.save(function(err, user) {
        if (err) {
            console.log("Error: ", err)
        }

        console.log("Data was saved in database")
        res.json(201, user)
    })
})

server.delete('/api/deleteuser/:id', function(req, res) {
    User.remove({ _id: req.body.id }, function(err, res) {
        if (err) {
            console.log("Error: ", err)
        }
        console.log(req.body.id + " deleted from database")
    })
})

server.put('/api/update_user/:id', function(req, res) {
    console.log(req.body)
    User.replaceOne({ _id: req.body.id }, {
        email: req.body.emailid,
        forename: req.body.new_forename,
        surname: req.body.new_surname
    }, function(err, doc) {
        if (err) {
            console.log("Error: ", err)
        }
        console.log(doc)
    })
})


server.listen(port, function () {
    console.log("Server ",  process.pid, 'listening on ', port )
});
console.log("Server listening to port 8080")

exports = module.exports = server