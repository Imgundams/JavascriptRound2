const commando = require('discord.js-commando');
const royalty = require("../functionality/func_royal.js");

class Kings extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'king',
                group: 'random',
                memberName: 'king',
                description: 'Gives you advice.',
                example: 'advice',
                args:
                [
                    {
                        key: 'name',
                        prompt: 'Whats the name of the king',
                        type: 'string',
                        infinite: false
                    }
                ]
            }
        )
    }

    async run(message, args) {

        message.reply(royalty.royal.findKing(args));
    }
}
module.exports = Kings;