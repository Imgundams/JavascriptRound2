function findKing(args) {


    let kingName = args.args.name.toString();
    // console.log(args.args.name);
    const royalty = JSON.parse(args.body);
    let output = "For the Royalty " + kingName;
    for (let i = 0; i < royalty.length; i++) {
        if (royalty[i].nm === kingName) {
            output += output + ", " + royalty[i].cty.toString() + ", " + royalty[i].hse.toString() + ", " + royalty[i].yrs.toString();
            return output;
        }
    }
}

module.exports = { findKing };