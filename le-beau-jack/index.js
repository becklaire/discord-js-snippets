// Requirements
const fs = require('node:fs'); // native module to read commands files
const path = require('node:path'); // native module to help construct paths to access files and directories
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Commands fetch
client.commands = new Collection(); // mean to use retrieve commands for execution
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

// LAUNCHER - LISTENER
client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction); //only catches slash interactions
});


// Discord logging
client.login(token);