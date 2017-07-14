const commando = require("discord.js-commando");
const flipIt = require("flip");

class WordFlip extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "flip",
            group: "random",
            memberName: "flip",
            description: "Flips a word for you",
            example: "flip words",

            args:
            [
                {
                    key: "word",
                    prompt: "What word do you want to flip?",
                    match: "content",
                    type: "string"
                }
            ]
        });
    }
    async run(message, args) {
        let flipWord = args.word.toString();
        let flipped = flipIt(flipWord);
        message.reply(flipped);
    }
}
module.exports = WordFlip;