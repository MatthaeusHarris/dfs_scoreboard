var express = require('express');
var router = express.Router();

var Scores = require('../models/scores');

router.put('/score', function(req, res, next) {
	Scores.create(req.body, function(err, data) {
		if (err) return next(err);
		res.send(data);
		res.end();
	});
});

router.get('/score', function(req, res, next) {
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

module.exports = router;