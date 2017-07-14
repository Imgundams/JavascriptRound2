function diceroll(args) {
    let numberToWorkWith = parseInt(args);
    if (numberToWorkWith / 1 === numberToWorkWith) {
        let roll = Math.floor(Math.random() * numberToWorkWith) + 1;
        return (roll);
    } else {
        return ("nothing");
    }
}
module.exports = { diceroll };