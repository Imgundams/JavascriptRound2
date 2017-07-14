const commando = require('discord.js-commando');
const randompuppy = require('random-puppy')

class PuppyPoster extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: 'pup',
            group: 'random',
            memberName: 'pup',
            description: "Posts a puppy",
            example: 'pup'
        });
    }
    async run(message, args) {
        randompuppy().then(url => (message.reply("I detected somebody saying pup, I like! Here is a picture of a pup. " + url)));
        }
}
module.exports = PuppyPoster;