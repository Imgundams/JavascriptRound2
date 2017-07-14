function findKing(nameAndJson) {


    let kingName = nameAndJson.name.toString();
    // console.log(args.args.name);
    const royalty = JSON.parse(nameAndJson.body);
    let output = "For the Royalty " + kingName;
    for (let i = 0; i < royalty.length; i++) {
        if (royalty[i].nm === kingName) {
            output += ", " + royalty[i].cty.toString() + ", " + royalty[i].hse.toString() + ", " + royalty[i].yrs.toString();
            return output;
        }
    }
}

module.exports = { findKing };