module.exports = {
    name: 'help',
    description: 'Need anything?',
    execute(message){
        message.channel.send("Command list :");
        message.channel.send("$badum: Replies with tssss. Wasn't your best pun, right?");
        message.channel.send("$badum <mention>: Replies the tagged person with tssss. But now you can blame your friends!");
        //message.channel.send("$leaderboard : Wanna see who's insufferable with his sh***y puns ? Now you know !");
    }
}