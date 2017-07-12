function openWeather(jsonWeather) {
    let weatherString ="The weather in ";
    weatherString.concat(jsonWeather.obj.sys.name) ;

    return weatherString;
}

module.exports = {
    openWeather
}