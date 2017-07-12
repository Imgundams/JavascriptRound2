const privateStuff = require("../../token");
const darkskykey = privateStuff.darkskykey;
const commando = require('discord.js-commando');

class DarkSky extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'darksky',
                group: 'weather',
                memberName: 'darksky',
                description: 'Tells you the weather outside.',
                example: 'weather london,uk',

                args:
                [
                    {
                        key: 'location',
                        prompt: 'Where do you want me to check the weather at?',
                        type: 'string',
                        infinite: false
                    }
                ]
            }
        )
    }
    async run(message, args) {

    }
}
module.exports = DarkSky;
