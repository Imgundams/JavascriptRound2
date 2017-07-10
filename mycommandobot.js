const privateStuff = require("./token");
const token = privateStuff.key;
const {commando, friendlyError} = require('discord.js-commando');
const client = new CommandoClient({
	commandPrefix: '?',
	owner,
	unknownCommandResponse: false,
//	disableEveryone: true
});
client.on('commandError', (cmd, err) => {
		if (err instanceof FriendlyError) return;
		console.log("Error in command ${cmd.groupID}:${cmd.memberName}"+ err);
})
client.on

client.registry.registerGroup([
	['random', 'Random'],
	['game','Game'].
	]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "DiscordBotBoy");


client.login(token);
console.log("Roboy ONLINE!");

//	enter the following into the terminal
//	node mybot.js 