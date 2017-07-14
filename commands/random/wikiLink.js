const commando = require('discord.js-commando');



class UrbanDictionary extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: 'whats',
            group: 'random',
            memberName: 'whats',
            description: 'Finds the UrbanDictionary entry of a word.',
            example: 'whats scrub',
            args: [
                {
                    key: 'word',
                    prompt: 'What should I look for? Underscroll for spaces please.',
                    type: 'string',
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
        let request = require('request')
    , url = "http://api.urbandictionary.com/v0/define?term="+ parseLink(args);
    request(url, (error, response, body) => {
            if (error) {
                message.reply("UrbanDictionary is down, I can't help you with your request.");
            }
            else {
                JSONobj = JSON.Parse(body)

                if(JSONobj.result_type.toString()==="no_results"){
                    message.reply("Can't find anything about it.")
                }
                else
                message.reply("For the Word "+ arg.word + "\nIt most likely defined as: "+JSONobj.list[0].definition+"\nAn example of it's use is: "+JSONobj.list[0].example);
            }
        })


    }


}
module.exports = UrbanDictionary;


// const commando = require('discord.js-commando');

// class WikiLink extends commando.Command {
//     constructor(bot) {
//         super(bot, {
//             name: 'wiki',
//             group: 'random',
//             memberName: 'wiki',
//             description: 'Posts the wikipedia page of entry.',
//             example: 'wiki bear',
//             args: [
//                 {
//                     key: 'webpage',
//                     prompt: 'What page should I look for? Underscroll for spaces please.',
//                     type: 'string',
//                     infinite: false
//                 }
//             ]
//         });
//     }
//     async run(message, args) {
        
//         function parseLink(stringToParse) {
//             if (stringToParse.webpage.includes("?"))
//                 return stringToParse.webpage.substring(0, stringToParse.webpage.indexOf("?"));
//             else
//                 return stringToParse.webpage.toString();
//         }

//         message.reply("https://en.wikipedia.org/wiki/" + parseLink(args));
//     }


// }
// module.exports = WikiLink;