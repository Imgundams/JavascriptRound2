const commando = require("discord.js-commando");

class UrbanDictionary extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "whats",
            group: "random",
            memberName: "whats",
            description: "Finds the UrbanDictionary entry of a word.",
            example: "whats scrub",
            args: [
                {
                    key: "word",
                    prompt: "What should I look for? Underscroll for spaces please.",
                    type: "string",
                    infinite: false
                }
            ]
        });
    }
    async run(message, args) {
        let whatWord = args.word.toString();
        let request = require("request")
            , url = "http://api.urbandictionary.com/v0/define?term=" + whatWord;
        request(url, (error, response, body) => {
            if (error) {
                message.reply("UrbanDictionary is down, I can't help you with your request.");
            }
            else {
                let jsonData = JSON.parse(body);
                if (jsonData.result_type.toString() === "no_results") {
                    message.reply("Can't find anything about it.")
                }
                else {
                    message.reply("For the Word " + whatWord + "\nIt most likely defined as: " + jsonData.list[0].definition + "\nAn example of it's use is: " + jsonData.list[0].example);
                }
            }
        });
    }
}
module.exports = UrbanDictionary;

