var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var scoreSchema = {
	seed: String,
	user: String,
	character: String,
	score: {type: Number, index: true},
	time: Number,
	turns: Number,
	moves: Object,
    mode: String
};

module.exports = db.model('scores', scoreSchema);