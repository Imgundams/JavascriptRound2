function openWeather(jsonWeather) {
    let weatherString ="The weather in "+jsonWeather.name.toString()+" is "+jsonWeather.weather[0].description.toString()+" with the humidity at "+jsonWeather.main.humidity.toString()+"% and a temperature of "+jsonWeather.main.temp.toString()+"°C ";
    // console.log ("The weather in "+jsonWeather.name.toString() +" is "+jsonWeather.weather[0].description.toString());
    // console.log("This is the console log "+ jsonWeather.id);
    return weatherString;
}

module.exports = {
    openWeather
};