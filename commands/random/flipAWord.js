const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
// Start with the character '!'
const OFFSET = '!'.charCodeAt(0);
const commando = require('discord.js-commando');

class WordFlip extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'flip',
                group: 'random',
                memberName: 'flip',
                description: 'Flips a word for you',
                example: 'flip words',

                args:
                [
                    {
                        key: 'word',
                        prompt: 'What word do you want to flip?',
                        type: 'string',
                        infinite: false
                    }
                ]
            }
        )
    }
    async run(message, args) {
        message.reply((args.word).join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join(''));
    }
}


module.exports = WordFlip;
