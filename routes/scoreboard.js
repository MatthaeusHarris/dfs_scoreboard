var express = require('express');
var router = express.Router();

var Scores = require('../models/scores');
var Seeds = require('../models/seeds');

router.put('/score', function(req, res, next) {
	Scores.create(req.body, function(err, data) {
		if (err) return next(err);
		res.send(data);
		res.end();
	});
});

router.get('/scores', function(req, res, next) {
	Scores
	.find()
	.sort('-score')
	.exec(function(err, data) {
		if (err) return next(err);
		res.json(data);
		res.end();
	});
});

router.get('/score/:seed', function(req, res, next) {
	Scores
	.find({seed: req.params.seed})
	.sort('-score')
	.exec(function(err, data) {
		if (err) return next(err);
		res.json(data);
		res.end();
	});
});

router.get('/seed', function(req, res, next) {
	var date = new Date();
	Seeds
	.find({
		"startDate": {
			"$lte": date
		},
		"endDate": {
			"$gte": date
		},
		"enabled": true
	})
	.sort('-startDate')
	.exec(function(err, data) {
		if (err) return next(err);
		if (data.length == 0) {
			res.status(404);
			res.json({"error": "no valid seed found"});
			res.end();
		} else {
			res.json(data[0]);
			res.end();
		}
	});
});

router.put('/seed', function(req, res, next) {
	console.log(req.body);
	Seeds.create(req.body, function(err, data) {
		if (err) return next(err);
		res.send(data);
		res.end();
	});
});

router.get('/seeds', function(req, res, next) {
	Seeds
	.find()
	.exec(function(err, data) {
		if (err) return next(err);
		res.json(data);
		res.end();
	});
});

module.exports = router;