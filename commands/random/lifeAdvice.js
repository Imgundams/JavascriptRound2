const commando = require('discord.js-commando');
var request = require('request')
                    ,url = 'http://api.adviceslip.com/advice';

class LifeAdvice extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'advice',
                group: 'random',
                memberName: 'advice',
                description: 'Gives you advice.',
                example: 'advice',
            }
        )
    }

    async run(message, args) {
       request(url,(error, response, body)=> {
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log('body:', body); // Print the HTML for the Google homepage. 
            var slip = JSON.parse(body);
            if (slip.slip.advice !== "") {
                message.reply(slip.slip.advice);
            }
            else {
                message.reply("No amount advice will help you.");
            }
        })}
}
module.exports = LifeAdvice;