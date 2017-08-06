var db = require("../db")

var User = db.model('User', {
	email : {type: String, required: true},
	forename : {type: String, required: true},
	surname : {type: String, required: true},
	date: {type: Date, required: true, default: Date.now}
})

module.exports = User