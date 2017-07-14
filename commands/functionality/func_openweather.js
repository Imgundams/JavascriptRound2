function openWeather(jsonWeather) {
    let weatherString = "";
    if (jsonWeather && (jsonWeather.cod.toString() !== "404")) {
        weatherString = "The weather in " + jsonWeather.name + " is " + jsonWeather.weather[0].description + " with the humidity at " + jsonWeather.main.humidity + "% and a temperature of " + jsonWeather.main.temp + "°C ";
    }
    else {
        weatherString = "You clearly don't know where you are.";
    }

    return weatherString;
}

module.exports = { openWeather };