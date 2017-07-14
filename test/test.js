const diceroll = require("../commands/functionality/func_dice_roll.js");
var assert = require("assert");

// describe("addition", function () {
//   it("Should add 1+1 correctly", function () {
//     var onePlusOne = 1 + 1;
//     assert.equal(onePlusOne, 2);
//   });
// });

describe("diceroll", function () {
  it("Should output a random number between 1 and 7", function () {
    let input = "7 ";
    let output = diceroll.diceroll(input);
    assert.ok(Boolean(output));
  });
  it("Should output a random negative number between 1 and 100", function () {
    let input = "100 ";
    let output = diceroll.diceroll(input);
    assert.ok(Boolean(output));
  });
});
describe("openWeatherAPI", function () {
  it("It should return a the weather for the location given", function () {
    let input = "manchester";
    let output = "";

  });
});