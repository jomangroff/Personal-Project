var User = require('../schemas/userSch.js');
var cart = require('../schemas/cartSch.js');

module.exports = {
		update: function(req, res, next){
			User.findByIdAndUpdate(req.params.user_id, {$set: req.body}, function(error, response) {
				if (error){
					res.status(500).json(err);
				} else {
					res.status(200).json(response);
				}
			})
	},
	read: function(req, res) {
		cart.findById(req.params.user_id, function(error, response) {
			if(error){
				res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		})
	},
	destroy: function(req, res) {
		cart.findByIdAndRemove(req.params.user_id, function(error, response) {
			if(error){
				res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		})
	},

	create: function(req, res) {
		var cartObject = new cartSchema(req.body);
	cartObject.save(function(err, returnedObject) {
		if(err){
			res.status(500).json(err);
		} else {
			res.status(200).json(returnedObject);
		}
	});
	}
}