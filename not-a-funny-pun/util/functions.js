const mongoose = require('mongoose');
const { Guild } = require('../models/index');

module.exports = async bot => {
    bot.createGuild = async guild => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
        const createGuild = await new Guild(merged);
        createGuild.save().then(g => console.log(`Nouveau serveur -> ${g.guildName}`));
    };    

    bot.createUser = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createUser = await new user(merged);
        createUser.save().then(u => console.log(`Nouveau user -> ${u.userName}`));
    };

    bot.getUser = async user => {
        const data = await user.finfOne({userID: user.id});
        if (data) return data;
        else return;
    };

    bot.updateUser = async (user, settings) => {
        let data = await bot.getUser(user);
        if (typeof data !== "object") data = {};
        for (const key in settings[key]) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    };


};
