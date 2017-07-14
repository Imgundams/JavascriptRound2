FlippedCharacters: {0: '0',1: 'Ɩ',2: 'ᄅ',3: 'Ɛ',4: 'ㄣ',5: 'ϛ',6: '9',7: 'ㄥ',8: '8',9: '6',
a: 'ɐ',b: 'q',c: 'ɔ',d: 'p',e: 'ǝ',f: 'ɟ',g: 'ƃ',h: 'ɥ',i: 'ᴉ',j: 'ɾ',k: 'ʞ',m: 'ɯ',n: 'u',r: 'ɹ',
t: 'ʇ',v: 'ʌ',w: 'ʍ',y: 'ʎ',A: '∀',C: 'Ɔ',E: 'Ǝ',F: 'Ⅎ',G: 'פ',H: 'H',I: 'I',J: 'ſ',L: '˥',M: 'W',N: 'N',P: 'Ԁ',T: '┴',
U: '∩',V: 'Λ',Y: '⅄','.': '˙',',': '\'','\'': ',','"': ',,','`': ',','?': '¿','!': '¡','[': ']',']': '[','(': ')',')': '(','{': '}','}': '{',
'<': '>','>': '<','&': '⅋',_: '‾','∴': '∵','⁅': '⁆'}
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
                        match: 'content'
                    }
                ]
            }
        )
    }
    async run(message, {args.word}) {
        const flipped = [];
        for (const c of args.word) {
            flipped.push(FlippedCharacters[c] || c);
        }
        return message.edit(flipped.reverse().join(''));
    }
}


module.exports = WordFlip;
