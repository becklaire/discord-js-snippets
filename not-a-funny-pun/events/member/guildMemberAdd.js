const { MessageEmbed } = require('discord.js');

module.exports = async (bot, member) => {
    const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .setFooter("New user joined the guild!")
        .setTimestamp();

    bot.channel.cache.get('256431374343471105').send(embed);

    const newUser = {
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        userName: member.user.tag,
    }

    await bot.createUser(newUser);

}