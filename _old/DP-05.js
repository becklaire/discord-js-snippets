const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = 'NjQ5NjcxMzU1NDIzMzkxNzQ0.XeAwSg.GrROEP-92_Y922W77HKqyDquL9k';

let handleInterval;

//BACKLOG
//message.reply('') ? Replies while tagging
//const PREFIX ='!';
//if(!message.content.startsWith(PREFIX)) return;
 
/* LANCEUR */
bot.on('ready', () =>{
    console.log('Status : online !');
    bot.user.setActivity("!help");

})

/* FONCTIONS */
//RINGSIDE
function RingsideInterv(message){
    var delay = Math.random() * 5000 + 3000;
    handleInterval = setInterval(function() {RingsideClear(message, delay), delay});
}
function RingsideClear(message, delay) {
    clearInterval(handleInterval);
    var RsRandom = Math.random();
    if (RsRandom < 0.5){
        message.channel.sendMessage("Diku Diku Diku desu ka ?" + delay).then(messageReaction => {
            messageReaction.react("😮");
            messageReaction.react("💪");
            messageReaction.react("😬");
        });
        return;
    }
    if (RsRandom > 0.9) {
        message.channel.sendMessage("Koshibite !" + delay).then(messageReaction => {
            messageReaction.react("😮");
            messageReaction.react("💪");
            messageReaction.react("😬");
        });
        return;
    }
    message.channel.sendMessage("Ehhhh sugoi desu ne !" + delay).then(messageReaction => {
        messageReaction.react("😮");
        messageReaction.react("💪");
        messageReaction.react("😬");
    });
}

bot.on('message', message =>{ 
    /* DECLARATION & INITIALISATION */
    let args = message.content.split(" ");

    /* TRAITEMENT */
    //JEUX
    if(args[0] === '!start'){
        if(!args[1]){
            message.channel.sendMessage('Bienvenue sur Dythm Paradise !');
            message.channel.sendMessage('Quel jeu souhaites-tu lancer ?');
            message.channel.sendMessage('1) Ringside');
        }
        //Ringside   
        if(args[1] === 'Ringside') { // /!\ Methode non adaptée car lancement par args[1] /!\
            message.channel.sendMessage('START GAME');
            RingsideInterv(message);
            if(args[0] === '!stop') return
        }
    }
        
    //JEUX ALEATOIRE
    if(args[0] === '!random'){
        return;
    }

    //LISTE DES JEUX
    if(args[0] === '!list'){
        message.channel.send('Les jeux disponibles pour le moment sont les suivants :');
        message.channel.send('* Ringside');
        message.channel.send('---');
        return;
    }

    //TUTORIEL
    if(args[0] === '!info'){
        if(!args[1]) return message.channel.send("Indique le nom d'un jeu après cette commande pour apprendre à jouer !");
        if(args[1] === 'Ringside'){
            message.channel.send('1 fille, 1 catcheur Mexicain, 1 public de photographes : la recette idéale d\'une interview !');
            message.channel.send('Réactions :');
            message.channel.send('Diku Diku Diku desu ka ? ? EH !').then(messageReaction => {
                messageReaction.react("😮");});
            message.channel.send('Ehhhh sugoi desu ne ! ? Flexion du bras !').then(messageReaction => {
                messageReaction.react("💪");});
            message.channel.send('Koshibite ! ? Pose s3xy !').then(messageReaction => {
                messageReaction.react("😬");});
            //Lien vidéo d'explication ?
        }
        return;
    }

    //PRENSENTATION
    if(args[0] === '!dp'){
        message.channel.send('Bienvenue sur Dythm Paradise !');
        message.channel.send('[DP] est un bot Discord qui permet de jouer à la fameuse license de jeux de rythme "Rythm Paradise".');
        message.channel.send('Ici, ni de stylet ni de vidéo ! Laisse toi guider au son et smash la bonne réaction !');
        message.channel.send('→ Développement en cours');
        return;
    }
    //HELP
    if(args[0] === '!help'){
        message.channel.send('Commandes générales :');
        message.channel.send('!start <jeu> : Lance le mini-jeu choisi');
        message.channel.send('!random : Lance un jeu au hasard');
        message.channel.send('!list: liste des jeux disponibles');
        message.channel.send('!info <jeu>: tutoriel du mini-jeu choisi');
        message.channel.send('!dp: présentation de Dythm Paradise');
        message.channel.send('Réservé aux admins :');
        message.channel.send('!clear <entier>: supprime un certain nombre de message dans le channel');
        return;
    }
            
    //CLEAR - Admin only (à faire)
    if(args[0] ==='!clear'){
        if(!args[1]) return message.channel.sendMessage('Indique un entier après cette commande pour supprimer des messages !');
        message.channel.bulkDelete(args[1]);
        return;
    }
 
})
 
bot.login(token);