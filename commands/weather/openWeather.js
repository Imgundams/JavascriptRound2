const privateStuff = require("../../token");
const weathertoken = privateStuff.weatherKey;
const commando = require('discord.js-commando');
var weather = require('openweather-apis');
weather.setLang('en');
var weatherInfomation = "The Weather in ";



class TheWeather extends commando.Command {
    constructor(bot) {
        super(bot,
            {
                name: 'weather',
                group: 'weather',
                memberName: 'weather',
                description: 'Tells you the weather outside.',
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
            }
        )
    }
    async run(message, args) {
        // const { location: string } = args;
        weather.setCity(args.location);
        weather.setAPPID(weathertoken)
        weather.setUnits('metric');
        weatherInfomation = weatherInfomation.concat(args.location)

        weather.getTemperature(function (err, temp) {
            weatherInfomation = weatherInfomation.concat(" is currently at a temperature of " + temp + "°C");
            // get the Atm Pressure 
            weather.getPressure(function (err, pres) {
                weatherInfomation = weatherInfomation.concat(", with the pressure at " + pres + "millibars");
                // get the Humidity 
                weather.getHumidity(function (err, hum) {
                    weatherInfomation = weatherInfomation.concat(", with the humidity at " + hum + "%");
                    // get the Description of the weather condition 
                    weather.getDescription(function (err, desc) {
                        console.log(desc);
                        message.reply(weatherInfomation + "\nIn other words the weather outside is\n" + desc)
                        weatherInfomation ="";
                    });
                });
            });
        });
    }

}
module.exports = TheWeather;
