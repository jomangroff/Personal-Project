var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./userSch.js');

var cartSchema = new Schema ({
	user: {type: Schema.Types.ObjectId, ref: 'user'},
	items: [
	{quantity: {type: Number},
	product:{type: Schema.Types.ObjectId, ref:"product"}}
	],
	total: {type: Number, required: true, min: 0}
})

module.exports = mongoose.model('cart', cartSchema);