const commando = require('discord.js-commando');

class DiceRollCommands extends commando.Command {
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            discription: 'rolls a die'
        });
    }

    async run(message, argument){
        var roll = 1+Math.floor(Math.random()*20)
        message.reply("You rolled a dice and got a "+ roll);
    }
}
module.exports = DiceRollCommands;