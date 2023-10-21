const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder() //class to construct the command definitions
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) { //method to reply
		await interaction.reply('Pong!');
	},
};