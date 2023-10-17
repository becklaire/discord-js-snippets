const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ5NjcxMzU1NDIzMzkxNzQ0.XeAwSg.GrROEP-92_Y922W77HKqyDquL9k';

const PREFIX ='!';

bot.on('ready', () =>{
    console.log('This bot is active and ready to go!')
    bot.user.setActivity("!help")
    
    //Test génération msg electronique
    //channel ID for timed messages
    //var sChannel = bot.channels.find(channel => channel.id === '649709627059208285');
    //setInterval(() => {
    //   sChannel.send("Message auto toutes les 2,5 secs.");
    //}, 2500)
    
})

bot.on('message', message =>{
    
    if(!message.content.startsWith(PREFIX)) return; //Bloque le choix du PREFIX

    let args = message.content.substring(PREFIX.length).split(" ");
    
    //message.reply('') → Replies while tagging

    switch(args[0]){
        case 'start': //starts a menu
        
        if(!args[1]){
            //INTRO
            message.channel.sendMessage('Welcome to Dythm Paradise !');
            message.channel.sendMessage('What do you want to play ?');
            message.channel.sendMessage('1) Ringside');

        //RINGSIDE    
        //Génération de phrase automatique → Temps [min - max] et type phrase [1-3]
        } if(args[1] === 'Ringside') {
            message.channel.sendMessage('START GAME');
            message.channel.sendMessage("Diku Diku Diku desu ka ?").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
            message.channel.sendMessage("Ehhhh sugoi desu ne !").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
            message.channel.sendMessage("Koshibite !").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
        } 
        break;

        case 'random':
            message.channel.send('Your random number is : ' + Math.floor(Math.random() * 10));
            break;

        case 'info':
            if(!args[1]) return message.channel.sendMessage("Type a game name after this command to have more info about it");
            if(args[1] === 'Ringside'){
                message.channel.sendMessage("Explanation incoming...")
                //Diku Diku Diku desu ka ? → EH!
                //Ehhhh sugoi desu ne ! → Flex
                //Koshibite ! → Pose muscle ARGHHHH
            }
            break;

        case 'help':
            message.channel.sendMessage("Welcome to Dythm Paradise !");
            message.channel.sendMessage("Explanation incoming...");
            //Principes de base
            break;

        case 'clear':
            if(!args[1]) return message.channel.sendMessage("Return a number after this command to erase X text logs");
            message.channel.bulkDelete(args[1]);
            break;
    }

})

bot.login(token);