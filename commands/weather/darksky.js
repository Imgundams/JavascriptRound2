const privateStuff = require("../../token");
const darkskykey = privateStuff.darkskykey;
const weathertoken = privateStuff.weatherKey;
const commando = require("discord.js-commando");
const rainCheck = require("../functionality/func_darksky.js");

class DarkSky extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'rain',
                group: 'weather',
                memberName: 'rain',
                description: "Tells you if and when its going to rain?",
                example: 'weather london,uk',

                args:
                [
                    {
                        key: 'location',
                        prompt: 'Where do you want me to check the weather at?',
                        type: 'string',
                        infinite: false
                    }
                ]
            });
    }
    async run(message, args) {
        // console.log("stage 1 " + args.location);
        rainCheck(message, args);
    }
}

function rainCheck(message, args) {
    // console.log("stage 2 " + args.location);
    let longitude;
    let latitude;
    let rainString = "";
    let keepYourPromises = new Promise(function (resolve, reject) {
        let request = require('request')
            , url = "http://api.openweathermap.org/data/2.5/weather?q=" + args.location + "&units=metric&appid=" + weathertoken;
        request(url, (error, response, body) => {
            var jsonWeather = JSON.parse(body);

            if (jsonWeather && (jsonWeather.cod.toString() != "404")) {
                // console.log("stage 3 lat: " + jsonWeather.coord.lat + ", long: " + jsonWeather.coord.lon);
                longitude = parseFloat(jsonWeather.coord.lon.toString());
                latitude = parseFloat(jsonWeather.coord.lat.toString());
                // console.log("stage 4 Lat: " + latitude + " Lon: " + longitude);
                let locationString = "For " + args.location + " at the latitude: " + latitude + " and the Longitude: " + longitude;
                let latlong = { latitude, longitude, locationString };
                resolve(latlong);
            }
            else {
                // console.log("Can't find location");
                message.reply("You clearly don't know where you are.");
                reject("You clearly don't know where you are.");

            }
        })
    })
    keepYourPromises.then((a) => {
        // console.log("stage 5 Lat: " + a.latitude + " Lon: " + a.longitude);

        let request = require('request')
            , url = "https://api.darksky.net/forecast/" + darkskykey + "/" + a.latitude + "," + a.longitude + "?units=si";
        request(url, (error, response, body) => {
            var jsonWeather = JSON.parse(body);
            // console.log("stage 6 Weather is currently: " + jsonWeather.minutely.summary + " Later today: " + jsonWeather.hourly.summary);
            if (jsonWeather && (jsonWeather.code != "400")) {
                rainString = a.locationString.concat("\nCurrently the weather: " + jsonWeather.minutely.summary + "\nLater today: " + jsonWeather.hourly.summary + "\nThis week: " + jsonWeather.daily.summary);
                message.reply(rainString);
            }
            else {
                reject(error);
                // message.reply("You clearly don't know where you are.");
            }
        })
    }, (a) => {
        // console.log(a);
        message.reply(a + ". DarkSky Servers are down look outside and forcast the weather yourself.");
    })
 //   function picReturn(weatherDescription)
}

let emoji = [
    ":cloud_tornado:",
    ":thunder_cloud_rain: :worried:",
    ":thunder_cloud_rain:",
    ":thunder_cloud_rain:",
    ":thunder_cloud_rain:",
    ":sweat_drops: :snowflake:",
    ":cloud_rain:",
    ":cloud_snow:",
    ":snowflake: :cloud_rain:",
    ":cloud_rain:",
    ":snowflake: :cloud_rain:",
    ":cloud_rain:",
    ":cloud_rain:",
    ":cloud_snow:",
    ":cloud_snow:",
    ":dash: :cloud_snow:",
    ":cloud_snow: :snowman:",
    ":snowflake:",
    ":snowflake:",
    ":foggy:",
    ":foggy:",
    ":foggy",
    ":fog:",
    ":dash:",
    ":dash:",
    ":cold_sweat:",
    ":cloud:",
    ":cloud: :crescent_moon: :cloud:",
    ":white_sun_cloud:",
    ":cloud: :crescent_moon: :cloud:",
    ":white_sun_small_cloud:",
    ":full_moon:",
    ":sun_with_face: ",
    ":cloud: :full_moon:",
    ":white_sun_cloud:",
    ":cloud_rain:",
    ":sunny:",
    ":thunder_cloud_rain:",
    ":thunder_cloud_rain:",
    ":thunder_cloud_rain:",
    ":cloud_rain:",
    ":cloud_snow: :cloud_snow:",
    ":cloud_snow: :snowflake:",
    ":cloud_snow: :snowman: :snowflake:",
    ":white_sun_cloud:",
    ":thunder_cloud_rain:",
    ":cloud_snow:",
    ":thunder_cloud_rain:",
    ""
]



module.exports = DarkSky;
