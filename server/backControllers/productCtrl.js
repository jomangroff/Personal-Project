var Product = require('../schemas/productSch.js');

module.exports = {
		update: function(req, res, next){
			Product.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
				if (error){
					res.status(500).json(err);
				} else {
					res.status(200).json(response);
				}
			})
		},
	// read: function(req, res) {
	// 	Product.findById(req.params.user_id, function(error, response) {
	// 		if(error){
	// 			res.status(500).json(err);
	// 		} else {
	// 			res.status(200).json(response);
	// 		}
	// 	})
	// },
	//read all
	read: function(req,res) {
		Product.find(req.query, function(error, response) {
			if(error){
				res.status(500).send(err);
			} else {
				res.status(200).send(response);
			}
		})
	},
	//read by category
	// readCategory: function(req, res) {
	// 	Product.find({"category":req.params.category}, function(error, respons) {
	// 		if(error){
	// 			res.status(500).json(err);
	// 		} else {
	// 			res.status(200).json(response);
	// 		}
	// 	})
	// },
	destroy: function(req, res) {
		Product.findByIdAndRemove(req.params.user_id, function(error, response) {
			if(error){
				res.status(500).json(err);
			} else {
				res.status(200).json(response);
			}
		})
	},

	create: function(req, res) {
		var productObject = new Product(req.body);
	productObject.save(function(err, returnedObject) {
		if(err){
			res.status(500).json(err);
		} else {
			res.status(200).json(returnedObject);
		}
	});
	}
}