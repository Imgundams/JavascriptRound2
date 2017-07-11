const privateStuff = require("./token");
const token = privateStuff.key;
const weathertoken = privateStuff.weatherKey;
const commando = require('discord.js-commando');
const path = require('path');
// const bot = new commando.Client();
const bot = new commando.CommandoClient({
    owner: '332849344824737794',
	commandPrefix: '?',
	unknownCommandResponse: false,
});
bot.registry.registerGroups([
        ['random', 'Random group'],
        ['weather', 'Weather group']
    ])
            .registerDefaults()
            .registerCommandsIn(__dirname + "/commands");
bot.login(token);
console.log("Roboy ONLINE!");

// const privateStuff = require("./token");
// const token = privateStuff.key;
// const {commando, friendlyError} = require('discord.js-commando');
// const client = new commando.Client({
// 	commandPrefix: '?',
// 	owner,
// 	unknownCommandResponse: false,
// //	disableEveryone: true
// });
// client.on('ready', () =>{client})
// client.on('commandError', (cmd, err) => {
// 		if (err instanceof FriendlyError) return;
// 		console.log("Error in command ${cmd.groupID}:${cmd.memberName}"+ err);
// })
// //client.on

// client.registry.registerGroup(
// 	['random', 'Random'],
// 	);
// client.registry.registerDefaults();
// client.registry.registerCommandsIn(__dirname + "DiscordBotBoy");


// client.login(token);
// console.log("Roboy ONLINE!");

// //	enter the following into the terminal
// //	node mybot.js 