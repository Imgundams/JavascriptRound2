const commando = require('discord.js-commando');
const royalty = require("../functionality/func_royal.js");
let request = require('request')
    , url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";


class Kings extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'royalty',
                group: 'random',
                memberName: 'royalty',
                description: 'Gives you infomation on a British royalty king or queen.',
                example: 'royalty Henry I',
                args:
                [
                    {
                        key: 'name',
                        prompt: 'Whats the name of the royalty',
                        type: 'string',
                        infinite: false
                    }
                ]
            }
        )
    }

    async run(message, args) {

        request(url, (error, response, body) => {
            if (error) {
                message.reply("The King json is down, I can't help you with your request.");
            }
            else {
                let moreArgs = { body, args };
                message.reply(royalty.findKing(moreArgs));
            }
        })
    }
}
module.exports = Kings;