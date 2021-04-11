const mongoose = require('mongoose');
const channelSchema = require('./models/channelSchema');
const Discord = require('discord.js');
const client = new Discord.Client();
class GlobalChat {
	/**
     *
     * @param {string} uri - mongodb connection uri
     */

	static async connect(uri) {
		if (!uri) throw new TypeError('Please provide a mongodb connection uri');
		return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	}

	/**
     *
     * @param {string} channelID - channel ID to connect
	 * @param {String}  guildID - guild ID to connect
     */
	static async addchannel(channelID, guildID) {
		if(!channelID) return new TypeError('param "channelID" not provided');
		if(!guildID) return new TypeError('param "guildID" not provided');
		channelSchema.findOne({ channelID: channelID }, async (err, data) => {
			if(err) throw err;
			if(data) {
				data.channelID = channelID;
				data.guildID = guildID;
				data.save();
			}
			if(!data) {
				const newdata = channelSchema({
					guildID: guildID,
					channelID: channelID,
				});
				newdata.save();
			}
		});
	}
}
module.exports = GlobalChat;