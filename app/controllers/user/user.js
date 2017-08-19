let models = require('../../models/index');
let _ = require('lodash');

let coreQueries = require('./coreQueries');

module.exports = {
	getOneById: function (req, res) {
		coreQueries.getOneById(req.params.id)
			.then((results) => {
				res.json(results)
			})
	},
	getOneByEmail: function (email) {
		return new Promise((resolve, reject) => {
			coreQueries.getOneByEmail(email)
				.then((results) => {
					resolve();
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				})
		})
	},
	findAll: function (req, res) {
		coreQueries.findAll(req.body)
			.then((results) => {
				res.json(results)
			})
	},
	create: function (req, res) {
		coreQueries.create(req.body)
			.then((results) => {
				res.json(results)
			})
	},
	update: function (req, res) {
		console.log('UPDATE');
		console.log(req.body);
	coreQueries.update(req.params.id, req.body)
			.then((results) => {
				res.json(results)
			})
	},
	query: function (req, res) {
		coreQueries.detailedQuery(req.body)
			.then((results) => {
			console.log("DETAILED QUERY RESULTS");
				res.json({resultArray: results})
			})
	},
	search: function(req, res){
		coreQueries.detailedQuery(req.body)
			.then((response) => {
			console.log(response);
				res.json(response);
			});

	},
	logout: function(req,res){
		req.session.destroy(function(err) {
			res.redirect('/');
		});

	}
};


