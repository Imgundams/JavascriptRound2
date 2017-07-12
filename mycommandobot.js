const privateStuff = require("./token");
const token = privateStuff.key;
const userID = privateStuff.user
const weathertoken = privateStuff.weatherKey;
const commando = require('discord.js-commando');
const path = require('path');
const bot = new commando.CommandoClient({
    owner: userID,
	commandPrefix: '?',
	unknownCommandResponse: false,
});
bot.registry.registerGroups([
        ['random', 'Random group'],
        ['weather', 'Weather group'],
        ['exercises','Exercises group']
    ])
            .registerDefaults()
            .registerCommandsIn(__dirname + "/commands");
bot.login(token);

console.log("Roboy ONLINE!");
