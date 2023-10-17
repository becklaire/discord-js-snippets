const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ5NjcxMzU1NDIzMzkxNzQ0.XeAwSg.GrROEP-92_Y922W77HKqyDquL9k';

let handleInterval;

/* BACKLOG */

function getCommand(){
    return ["!start", "!info", "!list", "!dp", "!help", "!clear"] 
}

function getGames(){
    return ["Ringside"]
}

function onUserMsg(message){
    let args = message.content.split(" ");
    if(!getCommand().includes(args[0])){ //Normal text
        return;
    }
    // if(args[0] === "!start" && (!args[1] || !getGames().includes(args[1]))) { //Exception '!start'
    //     message.channel.send("Type the name of the chosen game to start it!");
    //     return;
    // }
    // if(args[0] === "!info" && (!args[1] || !getGames().includes(args[1]))){ //Exception '!info'
    //     message.channel.send("Type the name of the chose game to learn how to play it!");
    //     return;
    // }
    if(args[0] === "!clear" && (!args[1] || isNaN(args[1]))){ //Exception '!clear'
        message.channel.send("Type a integer after the command to clear logs in the channel!");
        return;
    }
    if(!getCommand().includes(args[0])){
        launchStartMenu(message);
        return;
    }
    switch(args[0]){
        case "!start":
            launchGames(message, args[1]);
            return;
        case "!info":
            launchInfo(message, args[1]);
            return;
        case "!list":
            launchList(message);    
            return;
        case "!dp":
            launchPrez(message);
            return;
        case "!help":
            launchHelp(message);
            return;
        case "!clear":
            launchClear(message, args[1]);
            return;
    }
}

//LAUNCH MENU
function launchStartMenu(message){
    message.channel.send("Welcome to Dythm Paradise!");
    message.channel.send("Don\'t know where to start?");
    message.channel.send("Type '!help' to access to the command list!");
}

//LAUNCH GAMES
function launchGames(message, gameName){
    let args = message.content.split(" ");
    RingsideInterv(message);
}

//LAUNCH INFO
function launchInfo(message, gameName){
    let args = message.content.split(" ");
    // if(args[1] === "Ringside"){
        message.channel.send("1 girl, 1 mexican and photographs : best interview ever!");
        message.channel.send("Reactions:");
        message.channel.send("Diku Diku Diku desu ka? → *grunt*").then(messageReaction => {
            messageReaction.react("😮");});
        message.channel.send("Ehhhh sugoi desu ne! → *arm flex*").then(messageReaction => {
            messageReaction.react("💪");});
        message.channel.send("Koshibite! ? → *camera pose*").then(messageReaction => {
            messageReaction.react("😬");});
    // }
}

//LAUNCH LIST
function launchList(message){
    message.channel.send("Current available games: Ringside");
}

//LAUNCH PRESENTATION
function launchPrez(message){
    message.channel.send("Welcome to Dythm Paradise!");
    message.channel.send("[DP] allows you to play at various mini-games from the 'Rythm Paradise' license.");
    message.channel.send("Follow the instuctions and show off your groove!");
    message.channel.send("→ version: 1.0");    
}

//LAUNCH HELP
function launchHelp(message){
    message.channel.send("Command list:");
    message.channel.send("!start : starts the game");
    message.channel.send("!info : explains how to play");
    message.channel.send("!dp: presents the bot");
    //message.channel.send('Admin only:');
    message.channel.send("!clear <int>: clears the chosen number of logs in the channel");
}

//LAUNCH CLEAR - Int lim at 100 ?
function launchClear(message, clearNb){
    message.channel.bulkDelete(clearNb);
}

//RINGSIDE
function RingsideInterv(message){
    var delay = Math.random() * 6000 + 1500;
    handleInterval = setInterval(function() {RingsideClear(message, delay)}, delay);
}
function RingsideClear(message, delay) {
    clearInterval(handleInterval);
    var RsRandom = Math.random();
    if (RsRandom < 0.5){
        message.channel.send("Diku Diku Diku desu ka?").then(messageReaction => {
            messageReaction.react("😮");
            messageReaction.react("💪");
            messageReaction.react("😬");
        });
        clearInterval(handleInterval);
        return;
    }
    if (RsRandom > 0.9) {
        message.channel.send("Koshibite!").then(messageReaction => {
            messageReaction.react("😮");
            messageReaction.react("💪");
            messageReaction.react("😬");
        });
        clearInterval(handleInterval);
        return;
    }
    message.channel.send("Ehhhh sugoi desu ne!").then(messageReaction => {
            messageReaction.react("😮");
            messageReaction.react("💪");
            messageReaction.react("😬");
        });
    clearInterval(handleInterval);
}

//AWAIT REACTION [WIP]
function RingsideReactionCheck(message){
    const filter = (reaction, user) => {
	    return ["😮", "💪","😬"].includes(reaction.emoji.name) && user.id != '649671355423391744';
    };
    
    message.awaitReactions(filter, { max: 1, time: 20000, errors: ['time'] })
	    .then(collected => {
		    const reaction = collected.first();
		    if (reaction.emoji.name === "😮") {
                message.reply('You reacted with a "😮" emote');
            } if (reaction.emoji.name === "💪") {
                message.reply('you reacted with a "💪" emote.');
		    } else {
                message.reply('you reacted with a "😬" emote.');
            }
        })
        .catch(collected => { });  
}

//LAUNCHER
bot.on('ready', () =>{
    console.log("Status: online!");
    bot.user.setActivity("!help");    
})

//MAIN LOOP
bot.on('message', message =>{ 
    let args = message.content.split(" ");
    if(!message.author.bot){
        onUserMsg(message); 
    }
    RingsideReactionCheck(message)
})
 
bot.login(token);