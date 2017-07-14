const commando = require("discord.js-commando");
const request = require("request")
    , url = "http://api.adviceslip.com/advice";

class LifeAdvice extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: "advice",
                group: "random",
                memberName: "advice",
                description: "Gives you advice.",
                example: "advice",
            });
    }

    async run(message, args) {
        request(url, (error, response, body) => {
            let slip = JSON.parse(body);
            if (slip.slip.advice !== "" || !error) {
                message.reply(slip.slip.advice);
            }
            else {
                message.reply("No amount advice will help you.");
            }
        });
    }
}
module.exports = LifeAdvice;