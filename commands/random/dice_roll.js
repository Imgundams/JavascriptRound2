const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'roll',
                group: 'random',
                memberName: 'roll',
                description: 'Rolls a dice',
                example: 'roll 6',

                args:
                [
                    {
                        key: 'dieSize',
                        prompt: 'What dice shall i roll? This is simply a random number between 0 and the number entered.',
                        type: 'string',
                        infinite: false
                    }
                ]
            }
        )
    }
    async run(message, args) {
        const { dieSize } = args;
        if (args.dieSize / 1 === args.dieSize) {
            var roll = Math.floor(Math.random() * args.dieSize) + 1;
            message.reply("You rolled a " + roll);
        }else{
            message.reply(args.dieSize + " is not a valid number, please enter a number after the roll.")
        }
    }
}
module.exports = DiceRollCommand;