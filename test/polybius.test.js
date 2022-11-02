// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("check to see if ouput is a string", () => {
  it("output should be string", () => {
    let expected = "4432423352125413";
    let actual = polybius("thinkful");
    expect(actual).to.eql(expected);
  });
});

describe("check to see if input will be encoded", () => {
  it("should encode letters into matching numbers", () => {
    let expected = "1111";
    let actual = polybius("aa")
    expect(actual).to.eql(expected);
  });
  
  it("should convert 'i' and 'j' to value of '42'", () => {
    let expected = "4242";
    let actual = polybius("ij");
    expect(actual).to.eql(expected);    
  });
  
  it("should maintain spaces throughout", () => {
    let expected = " ";
    let actual = polybius(" ");
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    let expected = "4432423352125413";
    let actual = polybius("THINKFUL");
    expect(actual).to.eql(expected);
  });
});

describe("should check to see if input will be decoded", () => {
  it("should decode numbers into matching letters", () => {
    let expected = "aa";
    let actual = polybius("1111", false);
    expect(actual).to.eql(expected);
  });
  
  it("should convert '42' to 'i/j'", () => {
    let expected = "i/j";
    let actual = polybius("42", false);
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spaces throughout", () => {
    let expected = " ";
    let actual = polybius(" ", false);
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    let expected = "thi/jnkful";
    let actual = polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });
  
  it("should return false if length of string is odd", () => {
    let expected = false;
    let actual = polybius("333", false);
    expect(actual).to.eql(expected);
  });
});