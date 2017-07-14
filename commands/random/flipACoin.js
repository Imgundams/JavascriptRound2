const commando = require("discord.js-commando");

class coinFlipCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "coinflip",
            group: "random",
            memberName: "coinflip",
            description: "Flip a coin",
            example: "coinflip"
        });
    }
    async run(message, args) {
            if ((Math.floor(Math.random() * 1 )+1) === 1){
            message.reply("A fliped a coin. It was a heads");
            }
            else {
            message.reply("A fliped a coin. It was a tails");
            }
    }
}
module.exports = {
    coinFlipCommand
};