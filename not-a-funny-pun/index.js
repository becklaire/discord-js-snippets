const fs = require('fs');
const { Client, Collection} = require('discord.js');

const { TOKEN, PREFIX } = require('./config');

const bot = new Client();
bot.mongoose = require('./util/mongoose');
require('./util/functions')(bot);

bot.commands = new Collection();
bot.mongoose.init();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

//LAUNCHER
bot.on('ready', () =>{
    console.log("Status: online!");
    bot.user.setActivity(`${PREFIX}help`);    
})

//MAIN LOOP
bot.on('message', message =>{ 
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length).split(' ');
    const wCommand = args.shift().toLowerCase();

    if (!bot.commands.has(wCommand)) return;
    bot.commands.get(wCommand).execute(message, args);

})
 
bot.login(TOKEN);