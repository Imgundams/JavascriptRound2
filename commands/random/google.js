const commando = require("discord.js-commando");

class Google extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "google",
            group: "random",
            memberName: "google",
            description: "Posts the google link for people",
            example: "google bear",
            args: [
                {
                    key: "webpage",
                    prompt: "What page should I look for?",
                    type: "string",
                    infinite: false
                }
            ]
        });
    }
    async run(message, args) {
        function parseLink(stringToParse) {
            if (stringToParse.webpage.includes("?")) {
                return stringToParse.webpage.substring(0, stringToParse.webpage.indexOf("?"));
            }
            else {
                return stringToParse.webpage.toString();
            }
        }

        message.reply("http://lmgtfy.com/?q=" + parseLink(args));
    }

}
module.exports = Google;