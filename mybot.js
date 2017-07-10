const Discord = require('discord.js');
const client = new Discord.Client();
const privateStuff = require("./token");
 var token = privateStuff.key
client.on('ready', () => {
  console.log('I am ready!');
});
 
client.on('message', message => {
  if (message.includes === 'pong'||message.includes === 'Pong') {
    message.reply('ping');
  }
});
 
client.login(token);
console.log("Roboy ONLINE!");

//	enter the following into the terminal
//	node mybot.js 