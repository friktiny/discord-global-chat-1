const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
	id: String,
	wallet: Number,
	bank: Number,
	bankspace: Number,
});
module.exports = mongoose.model('economy', Schema);