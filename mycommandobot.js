const commando = require('discord-js-commando');
const robotClient = new commando.Client();
const privateStuff = require("./token");
var token = privateStuff.key;

robotClient.registry.registerGroup('random', 'Random');
robotClient.registry.registerDefaults();
robotClient.registry.registerCommandsIn(__dirname + "/DiscordBotBoy");
robotClient.login(token);
console.log("Roboy ONLINE!");

//	enter the following into the terminal
//	node mybot.js 