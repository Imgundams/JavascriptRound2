function diceroll(args){
        var numberToWorkWith = parseInt(args.dieSize);
        if (numberToWorkWith / 1 === numberToWorkWith) {
            var roll = Math.floor(Math.random() * numberToWorkWith) + 1;
            return("You rolled a " + roll);
        }else{
            return("You rolled a nothing.")
        }
}
module.exports = {
    diceroll
}