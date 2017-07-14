const privateStuff = require("../../token");
const weathertoken = privateStuff.weatherKey;
const commando = require("discord.js-commando");
const funclocation = require("../functionality/func_location.js");
let weatherInfomation = "The Weather in ";


class WeatherBetter extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: "where",
                group: "weather",
                memberName: "where",
                description: "Tells you the where a latitude and longitude of a city.",
                example: "where london,uk",

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
        let location = args.location;
        let loc = location;
        let request = require("request")
            , url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&units=metric&appid=" + weathertoken;
        request(url, (error, response, body) => {
            // console.log(loc);
            let jsonWeather = JSON.parse(body);
            let longitude = parseFloat(jsonWeather.coord.lon.toString());
            let latitude = parseFloat(jsonWeather.coord.lat.toString());
            // console.log(latitude + " " + longitude);
            if (error) {
                message.reply("You clearly don't know where you are.");
            }
            else {
                // console.log(latitude + " " + loc + " " + longitude);
                message.reply("The location of " + loc + " is at \nLatitude: " + latitude + "\nLongitude: " + longitude);
            }
        });
    }
}
module.exports = WeatherBetter;
