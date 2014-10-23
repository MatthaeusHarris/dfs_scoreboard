var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scoreSchema = {
	seed: String,
	user: String,
	character: String,
	score: Number,
	time: Number,
	turns: Number,
	moves: Object
};

module.exports = db.model('scores', scoreSchema);