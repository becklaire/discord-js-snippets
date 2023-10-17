module.exports = {
    name: 'badum',
    description: 'Replies with tssss.',
    execute(message, tag){
        message.channel.send("tsssss :drum:");
        if(!tag){
            message.channel.send(`User ID = ${message.author.id}`); //return the user ID
            return;
        }
        message.channel.send(`You're not funny ${tag}.`);
    }
}