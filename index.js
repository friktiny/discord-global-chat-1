const mongoose = require('mongoose');
const schema = require('./models/economySchema');
class GlobalChat {
	/**
     *
     * @param {string} uri - mongodb connection uri
     */

	static async connect(uri) {
		if (!uri) throw new TypeError('Please provide a mongodb connection uri');
		return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	}

	static async balance(userID) {
		let data = await schema.findOne({ id: userID });
		if(!data) {
			data = new schema({
				id: userID,
				wallet: 0,
				bank: 0,
				bankspace: 0,
			}).save();
		}
		return data;
	}
}
module.exports = GlobalChat;