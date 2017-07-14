const commando = require("discord.js-commando");
const diceroll = require("../functionality/func_dice_roll.js");


class DiceRollCommand extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: "roll",
                group: "random",
                memberName: "roll",
                description: "Rolls a dice",
                example: "roll 6",
                args:
                [
                    {
                        key: "dieSize",
                        prompt: "What dice shall i roll? This is simply a random number between 0 and the number entered.",
                        type: "string",
                        infinite: false
                    }
                ]
            }
        );
    }
    async run(message, args) {
        message.reply(diceroll.diceroll(args));
    }
}
module.exports = {
    DiceRollCommand
};