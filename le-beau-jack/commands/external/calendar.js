const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder() //class to construct the command definitions
		.setName('calendar')
		.setDescription('List next upcoming event.'),
	async execute(interaction) { //method to reply
		await interaction.reply('Code à mettre ici!');
	},
};

// const getNextEvent = async (calendarId) => {
// 	try {
// 		console.log(`On essaie des trucs ici.`)
// 		 let response = await calendar.events.list({
// 			calandarId: calendarId,
// 		 });

// 		 let items = response['data']['items'];
// 		 return items;
// 	}
// 	catch(error){
// 		console.error(`Def fonction erreur : ${error}`);
// 		return 0;
// 	}
// }

// getNextEvent(googleFocusCalendarId)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

// // Call each new day > Primary calendar "event" via get > Event read "summary = Borderlands" via get > Reminder function with reactions
// // calendar.items[{id: googleFocusCalendarId}]. Query use ??