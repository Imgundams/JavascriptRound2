let request = require('request')
    , url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";

function findKing(args) {
    let kingName = args.name.toString();
    console.log(args);

    request(url, (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred 
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
        console.log('body:', body); // Print the HTML for the Google homepage. 
        let royalty = JSON.parse(body);
        output = JSON.stringify(royalty);
        console.log(output);
        // let output = "For the Royalty ";
        // for (let i = 0; i < royalty.length; i++) {
        //     if (kingName === royalty[i].nm) {
        //         output = output + royalty[i].nm + " whom lived in ";
        //         output = output + royalty[i].cty + " from the house";
        //         output = output + royalty[i].hse + " lived from ";
        //         output = output + royalty[i].yrs + ".";
        //     }
        // }
        return output
    })
}

module.exports = {
    findKing
}