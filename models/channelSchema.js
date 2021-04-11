const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
	guildID: String,
	channelID: String,
});
module.exports = mongoose.model('warnings', Schema);