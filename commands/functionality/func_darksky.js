const privateStuff = require("../../token");
const darkskykey = privateStuff.darkskykey;
const weathertoken = privateStuff.weatherKey;

function RainCheck(args) {
    // console.log("stage 2 " + args.location);
    let longitude;
    let latitude;
    let rainString = "";
    let keepYourPromises = new Promise(function (resolve, reject) {
        let request = require("request")
            , url = "http://api.openweathermap.org/data/2.5/weather?q=" + args.location + "&units=metric&appid=" + weathertoken;
        request(url, (error, response, body) => {
            var jsonWeather = JSON.parse(body);

            if (jsonWeather && (jsonWeather.cod.toString() !== "404")) {
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
                return "You clearly don't know where you are.";
            }
        });
    });
    keepYourPromises.then((a) => {
        // console.log("stage 5 Lat: " + a.latitude + " Lon: " + a.longitude);

        let request = require("request")
            , url = "https://api.darksky.net/forecast/" + darkskykey + "/" + a.latitude + "," + a.longitude + "?units=si";
        request(url, (error, response, body) => {
            var jsonWeather = JSON.parse(body);
            // console.log("stage 6 Weather is currently: " + jsonWeather.minutely.summary + " Later today: " + jsonWeather.hourly.summary);
            if (jsonWeather && (jsonWeather.code !== "400")) {
                rainString = a.locationString.concat("\nCurrently the weather: " + jsonWeather.minutely.summary + "\nLater today: " + jsonWeather.hourly.summary + "\nThis week: " + jsonWeather.daily.summary);
                return fetch(rainString);
            }
            else {

                return ("You clearly don't know where you are.");
            }
        });
        return rainString;
    }, (a) => {
        // console.log(a);
        return a + ". DarkSky Servers are down look outside and forcast the weather yourself.";
    });
    return rainString;
}
module.exports = { RainCheck };