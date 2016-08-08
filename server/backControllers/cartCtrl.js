var cart = require('../schemas/cartSch.js');

module.exports = {
    update: function(req, res, next) {
        cart.findOne({
            user: req.user._id
        }, function(error, response) {
            console.log(response);
            if (!response) {
                var newObject = {
                    user: req.user._id,
                    items: [{
                        quantity: 1,
                        product: req.body._id
                    }],
                    total: req.body.price
                }
                console.log(newObject);
                cart.create(newObject);
                res.status(500).json(newObject);
            } else {
                var newItem = {
                    quantity: 1,
                    product: req.body._id
                }
                response.items.push(newItem);
                response.save(
                    function(err, model) {
                        console.log(err);

                        res.status(200).json(response);
                    })
            }
            // response.items.push(newItem)
            // response.save(function () {
            // 	res.status(200).json(response);
            // })
        })
    },
    read: function(req, res) {
        cart.findOne({
                user: req.user._id
            })
            .populate('items.product')
            .exec(function(error, response) {
                if (error) {
                    res.status(500).json(error);
                } else {
                    res.status(200).json(response);
                }
            })
    },
    destroy: function(req, res) {
        cart.findByIdAndRemove(req.params.id, function(error, response) {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(response);
            }
        })
    },

    delete: function(req, res) {
        console.log(req.params.id, req.params.product_id)
        cart.findOne({
                _id: req.params.id
            },
            function(error, aCart) {
                // console.log(response, error);
                if (error) {
                    res.status(500).json(error);
                } else {
                    console.log(aCart);
                    for (var i = 0; i < aCart.items.length; i++) {
                        console.log("item", aCart.items[i]);
                        if (aCart.items[i]._id + "" === req.params.product_id) {
                            aCart.items.splice(i, 1);
                        }
                    }
                    aCart.save(function(error, response) {
                        if (error) {
                            res.status(500).json(error);
                        } else {
                            res.status(200).json(response);
                        }
                    })

                }
            })
    },

    create: function(req, res) {
        var cartObject = new cart(req.body);
        cartObject.save(function(err, returnedObject) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(returnedObject);
            }
        });
    }
}

// update: function(req, res,) {
// var cartObject = new cartModel(req.body);
// (function(err, returnedObject) {
// 	if(err){
// 		res.status(500).json(err);
// 	} else {
// 		res.status(200).json(returnedObject);
// 	}
