const pjson = require('./package.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = 'NjQ5NjcxMzU1NDIzMzkxNzQ0.XeAwSg.GrROEP-92_Y922W77HKqyDquL9k';
 
const PREFIX ='!';

let handleInterval;

//BACKLOG
//message.reply('') → Replies while tagging
 
//LANCEUR
bot.on('ready', () =>{
    console.log('Status : online !');
    bot.user.setActivity("!help");

})

function rInterv(message){
    var rTpsInterv = Math.random() * 5000;
    handleInterval = setInterval(function() {clearInterv(message, rTpsInterv)}, rTpsInterv);
}

function clearInterv(message, rTpsInterv) {
    clearInterval(handleInterval);
    message.channel.sendMessage('hello world ' + rTpsInterv);
}

bot.on('message', message =>{
    if (message.author === pjson.name){
        message.channel.sendMessage("IDEM");
        return;
    }
    rInterv(message);    
})
    
bot.login(token);