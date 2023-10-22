/*---------------------
BRAIN DUMP
---------------------*/
// Dotenv use
// deploy-commands reloading*
// 


/*---------------------
REQUIREMENTS
---------------------*/
const fs = require('node:fs'); // native module to read commands files
const path = require('node:path'); // native module to help construct paths to access files and directories*

const { Events, Client, Collection, GatewayIntentBits } = require('discord.js');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const { token, googleClientId, googleSecretId, googleRefreshToken} = require('./config.json');

// Clients definition
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const oAuth2Client = new OAuth2(googleClientId, googleSecretId);

/*---------------------
GOOGLE
---------------------*/
oAuth2Client.setCredentials({refresh_token: googleRefreshToken}); //OAuth2 access refresh
const calendar = google.calendar({version: 'v3', auth: oAuth2Client}); // Object definition

/*---------------------
FETCH
---------------------*/
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

//EVENTS
client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	// const now = Date.now();
	// If date = midnight > Next Event check

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Discord logging
client.login(token);