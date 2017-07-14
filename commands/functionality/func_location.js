const privateStuff = require("../../token");
const weathertoken = privateStuff.weatherKey;

function Locate(location) {
    let loc = location;
    let request = require("request")
        , url = "http://api.openweathermap.org/data/2.5/weather?q=" + loc + "&units=metric&appid=" + weathertoken;
    request(url, (error, response, body) => {
        // console.log(loc);
        let jsonWeather = JSON.parse(body);
        let longitude = parseFloat(jsonWeather.coord.lon.toString());
        let latitude = parseFloat(jsonWeather.coord.lat.toString());
        // console.log(latitude + " " + longitude);
        let weatherString = "";
        if (error) {
            return weatherString = "You clearly don't know where you are.";
        }
        else {
            // console.log(latitude + " " + loc + " " + longitude);
            return "The location of " + loc + " is at \nLatitude: " + latitude + "\nLongitude: " + longitude;
        }
    });
}

module.exports = { Locate };