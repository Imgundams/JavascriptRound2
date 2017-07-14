const privateStuff = require("../../token");
const weathertoken = privateStuff.weatherKey;
const commando = require("discord.js-commando");
const openWeather = require("../functionality/func_openweather.js");
let weatherInfomation = "The Weather in ";



class WeatherBetter extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: "weather",
                group: "weather",
                memberName: "weth",
                description: "Tells you the weather outside.",
                example: "weth london,uk",

                args:
                [
                    {
                        key: "location",
                        prompt: "Where do you want me to check the weather at?",
                        type: "string",
                        infinite: false
                    }
                ]
            });
    }
    async run(message, args) {

        let request = require("request")
    , url = "http://api.openweathermap.org/data/2.5/weather?q="+args.location+"&units=metric&appid="+weathertoken;
     request(url,(error, response, body) => {
            // console.log("error:", error); // Print the error if one occurred 
            // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received 
            // console.log("body:", body); // Print the HTML for the Google homepage. 
            let jsonWeather = JSON.parse(body);
            message.reply(openWeather.openWeather(jsonWeather));
        });
    }
}
module.exports = WeatherBetter;
