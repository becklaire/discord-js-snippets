const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    userName: String,
    experience: {
        "type": Number,
        "defaults": 0
    },
    level: {
        "type": Number,
        "defaults": 0
    }
});

module.exports = mongoose.model("User", userSchema);
