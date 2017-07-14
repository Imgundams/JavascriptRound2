function openWeather(jsonWeather) {
    let weatherString = "The weather in " + jsonWeather.name + " is " + jsonWeather.weather[0].description + " with the humidity at " + jsonWeather.main.humidity + "% and a temperature of " + jsonWeather.main.temp + "°C ";
    return weatherString;
}

module.exports = { openWeather };