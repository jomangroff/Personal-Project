var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema ({
	title: {type: String, unique: true, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true, min: 0},
	category: {type: String, required: true},
	picture: {type: String}
})

module.exports = mongoose.model('product', productSchema);