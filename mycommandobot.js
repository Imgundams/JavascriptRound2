const privateStuff = require("./token");
const token = privateStuff.key;
const userID = privateStuff.user
const weathertoken = privateStuff.weatherKey;
const commando = require("discord.js-commando");
const path = require("path");
process.on("unhandledRejection",console.error);
const bot = new commando.CommandoClient({
    owner: userID,
	commandPrefix: "?",
	unknownCommandResponse: false,
});
bot.registry.registerGroups([
        ["random", "Random group"],
        ["weather", "Weather group"],
        ["exercises","Exercises group"]
    ])
            .registerDefaults()
            .registerCommandsIn(__dirname + "/commands");

            bot.login(token);

bot.on("message", (message)=>{
    if(message.content =="fun"||message.content =="yay")
        message.reply("Stop having fun!");
})
console.log("Roboy ONLINE!");
