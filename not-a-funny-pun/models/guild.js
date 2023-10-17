const mongoose = require('mongoose');
const { DEFAULTSETTINGS: defaults} = require('../config');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
        "defaults": defaults.prefix
    },
    logChannel: {
        "type": String,
        "defaults": defaults.logChannel
    },
    welcomeMessage: {
        "type": String,
        "defaults": defaults.welcomeMessage
    }
});

module.exports = mongoose.model("Guild", guildSchema);
