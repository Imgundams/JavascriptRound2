const Discord = require("discord.js");
const client = new Discord.Client();
const privateStuff = require("./token");
const randompuppy = require("random-puppy");
var token = privateStuff.key;

client.on("ready", () => {
	// console.log("I am ready!");
});

client.on("message", (message) => {
	if (message.content.includes(":(") || message.content.includes("\:frowning:")) {
		message.reply("I see you are sad");
	}
});

//Doggie function
client.on("message", (message) => {
	if (message.content.includes("doggie")) {
		randompuppy().then((url) => message.reply("I detected somebody saying dogg1e, I like, Here is a picture to cheer you up" + url));
		// console.log(message.content);
	}
});

client.login(token);
// console.log("Roboy ONLINE!");

//	enter the following into the terminal
//	node mybot.js 