var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var seedSchema = {
	seed: String,
	enabled: Boolean,
	startDate: Date,
	endDate: Date
};

module.exports = db.model('seeds', seedSchema);