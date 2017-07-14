const commando = require("discord.js-commando");

class WikiLink extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "wiki",
            group: "random",
            memberName: "wiki",
            description: "Posts the wikipedia page of entry.",
            example: "wiki bear",
            args: [
                {
                    key: "webpage",
                    prompt: "What page should I look for? Underscroll for spaces please.",
                    type: "string",
                    infinite: false
                }
            ]
        });
    }
    async run(message, args) {

        function parseLink(stringToParse) {
            if (stringToParse.webpage.includes("?"))
                return stringToParse.webpage.substring(0, stringToParse.webpage.indexOf("?"));
            else
                return stringToParse.webpage.toString();
        }

        message.reply("https://en.wikipedia.org/wiki/" + parseLink(args));
    }
}
module.exports = WikiLink;