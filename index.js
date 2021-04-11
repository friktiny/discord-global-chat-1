const mongoose = require('mongoose');

class GlobalChat {
	/**
     *
     * @param {string} url - mongodb connection uri
     */

	static async connect(uri) {
		if (!uri) throw new TypeError('Please provide a mongodb connection uri');
		try {
			return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		}
		catch (e) {
			return new TypeError('Wrong mongodb connection uri provided');
		}
	}
}
module.exports = GlobalChat;