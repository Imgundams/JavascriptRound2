function findKing(args) {


    let kingName = args.args.name.toString();
    // console.log(args.args.name);
    let royalty = JSON.parse(args.body);
    let output = "For the Royalty " + kingName;

    for (let i = 0; i < royalty.length; i++) {
        if (royalty[i].nm === kingName) {
            output = output + ", " + royalty[i].cty + ", " + royalty[i].hse + ", " + royalty[i].yrs;
            return output;
        }
    }
}

module.exports = { findKing };