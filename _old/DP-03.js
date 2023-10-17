/* 
bot.on('message', message =>{
    
    /*
    FUNCTIONS
    */
    //RINGSIDE
    function ringside(nb){
        //message.channel.send(nb);
        if (nb < 0.5){
            message.channel.sendMessage("Diku Diku Diku desu ka ?").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
        } else if (nb > 0.9) {
            message.channel.sendMessage("Koshibite !").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
        } else {
            message.channel.sendMessage("Ehhhh sugoi desu ne !").then(messageReaction => {
                messageReaction.react("😮");
                messageReaction.react("💪");
                messageReaction.react("😬");
            });
        }
    }
    
    /*
    DECLARATION & INITIALISATION
    */
    //Force l'utilisation du prefix 'PREFIX'
    if(!message.content.startsWith(PREFIX)) return;
 
    let args = message.content.substring(PREFIX.length).split(" ");

    var i; //Variable boucle FOR
    var vRand; //Generation Random


    setInterval(message.channel.send('Hello /3000'), 3000);


    /* 
    SWITCH CASE
    */
    switch(args[0]){
        case 'start': //starts a menu
        
        //MENU PRINCIPAl
        if(!args[1]){ 
            message.channel.sendMessage('Bienvenue sur Dythm Paradise !');
            message.channel.sendMessage('Quel jeu souhaites-tu lancer ?');
            message.channel.sendMessage('1) Ringside');
 
        //Ringside   
        //Génération de phrase automatique à faire → Temps [min - max] et type phrase [1-3]
        } if(args[1] === 'Ringside') {
            message.channel.sendMessage('START GAME');
            for (i = 0; i < 5; i++){
                vRand = Math.random();
                ringside(vRand);
            }
        } 
        break;
        
        //JEUX ALEATOIRE
        case 'random':
            //Création d'un tableau des jeux à dispo → Selection aléatoire → Lancement
            break;
        
        //LISTE DES JEUX
        case 'list':
            message.channel.send('Les jeux disponibles pour le moment sont les suivants :');
            message.channel.send('* Ringside');
            message.channel.send('---');
            break;

        //TUTORIEL
        case 'info':
            if(!args[1]) return message.channel.send("Indique le nom d'un jeu après cette commande pour apprendre à jouer !");
            if(args[1] === 'Ringside'){
                message.channel.send('1 fille, 1 catcheur Mexicain, 1 public de photographes : la recette idéale d\'une interview !');
                message.channel.send('Réactions :');
                message.channel.send('Diku Diku Diku desu ka ? → EH !').then(messageReaction => {
                messageReaction.react("😮");});
                message.channel.send('Ehhhh sugoi desu ne ! → Flexion du bras !').then(messageReaction => {
                messageReaction.react("💪");});
                message.channel.send('Koshibite ! → Pose s3xy !').then(messageReaction => {
                messageReaction.react("😬");});
                //Lien vidéo d'explication ?
            }
            break;
        
        //PRENSENTATION
        case 'dp':
            message.channel.send('Bienvenue sur Dythm Paradise !');
            message.channel.send('[DP] est un bot Discord qui permet de jouer à la fameuse license de jeux de rythme "Rythm Paradise".');
            message.channel.send('Ici, ni de stylet ni de vidéo ! Laisse toi guider au son et smash la bonne réaction !');
            message.channel.send('→ Développement en cours');
            break;
 
        //HELP
        case 'help':
            message.channel.send('Commandes générales :');
            message.channel.send('!start <jeu> : Lance le mini-jeu choisi');
            message.channel.send('!random : Lance un jeu au hasard');
            message.channel.send('!list: liste des jeux disponibles');
            message.channel.send('!info <jeu>: tutoriel du mini-jeu choisi');
            message.channel.send('!dp: présentation de Dythm Paradise');
            message.channel.send('Réservé aux admins :');
            message.channel.send('!clear <entier>: supprime un certain nombre de message dans le channel');
            break;
            
        //CLEAR - Admin only (à faire)
        case 'clear':
            if(!args[1]) return message.channel.sendMessage('Indique un entier après cette commande pour supprimer des messages !');
            message.channel.bulkDelete(args[1]);
            break;
    }
 
})