// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("check to see if input is valid", () => {
  it("should return false if shift value is not present", () => {
    const expected = false;
    const actual = caesar("message");
    expect(actual).to.eql(expected);
  });
  
  it("should return false if shift value is 0", () => {
    const expected = false;
    const actual = caesar("message", 0);
    expect(actual).to.eql(expected);
  });
  
  it("should return false if shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("message", -26);
    expect(actual).to.eql(expected);
  });
  
  it("should return false if shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("message", 26);
    expect(actual).to.eql(expected);
  });
})

describe("check to see if shift works", () => {
  it("should return message that ignores capital letters", () => {
    const expected = "wklqnixo"
    const actual = caesar("THINKFUL", 3);
    expect(actual).to.eql(expected);
  });
  
  it("should return message that maintains spaces and other nonalphabetic symbols", () => {
    const expected = "wklqnixo?!";
    const actual = caesar("thinkful?!", 3);
    expect(actual).to.eql(expected);
  });
  
  it("should return message that handles shifts that wraps around end of alphabet", () => {
    const expected = "ccc";
    const actual = caesar("zzz", 3);
    expect(actual).to.eql(expected);
  });
});