const diceroll = require("../commands/functionality/func_dice_roll.js");
const openWeather = require("../commands/functionality/func_openweather.js");
const rainCheckFunc = require("../commands/functionality/func_darksky.js");
const findme = require("../commands/functionality/func_location.js");
const royalty = require("../commands/functionality/func_royal.js");
const privateStuff = require("../token");
const darkskykey = privateStuff.darkskykey;
const weathertoken = privateStuff.weatherKey;
var assert = require("assert");

describe("diceroll", function () {
  it("Should output a random number", function () {
    let input = "7 ";
    let output = diceroll.diceroll(input);
    assert.ok(Boolean(output));
  });
  it("Should output a random negative number between 1 and 100", function () {
    let input = "100 ";
    let output = diceroll.diceroll(input);
    assert.ok(Boolean(output));
  });
  it("Should output a random number between 1 and 7", function () {
    let input = 7;
    let output = diceroll.diceroll(input);
    assert.ok(output < 8 && output > 0);
  });

});
describe("openWeatherAPI", function () {

  it("It should beable to parse an error in the json file when theres a bad input", function () {
    let input = { "cod": "404", "message": "city not found" };
    assert.equal(openWeather.openWeather(input).toString(), "You clearly don't know where you are.");
  });

  it("It should return an error for the bad location given Through the openweather api.", function () {
    let input = "NotARealPlace";
    let output = "";
    let request = require("request")
      , url = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=" + weathertoken;
    request(url, (error, response, body) => {
      let jsonWeather = JSON.parse(body);
      assert.equal(openWeather.openWeather(input), "You clearly don't know where you are.");

    });
  });

  it("It should return a the weather for the location given Through the openweather api.", function () {
    let input = "Manchester";
    let output = "";
    let request = require("request")
      , url = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=" + weathertoken;
    request(url, (error, response, body) => {
      let jsonWeather = JSON.parse(body);
      assert.equal(jsonWeather.name, input);

    });
  });


});
describe("royalty", function () {

  it("It should beable to parse an error in the json file when theres a bad input", function () {
    let request = require("request")
      , url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kingsfake.json";
    request(url, (error, response, body) => {
      assert.ok(error);
    });
  });

  it("It should beable to parse the json assuming that the json file is found", function () {
    let request = require("request")
      , url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";

    let name = "Cnut";

    request(url, (error, response, body) => {
      let moreArgs = { body, name };
      assert.equal(royalty.findKing(moreArgs), "For the Royalty Cnut, United Kingdom, House of Denmark, 1016-1035");
    });
  });

});
