// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("check to see if there are errors", () => {
  it("should return false if substitution alphabet is not present", () => {
    const expected = false;
    const actual = substitution("message");
    expect(actual).to.eql(expected);
  });
  
  it("should return false if substitution alphabet is not exactly 26 characters", () => {
    const expected = false;
    const actual = substitution("message", 22);
    expect(actual).to.eql(expected);
  });
  
  it("shoulder return false if substitution alphabet does contain unique characters", () => {
    const expected = false; 
    const actual = substitution("message", "thinkful");
    expect(actual).to.eql(actual);
  });
});

describe("check to see if input will be encoded", () => {
  it("should encode message by using the substitution alphabet", () => {
    let expected = "jrufscpw";
    let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
  
  it("should work with unique characters", () => {
    let expected = "y&ii$r&";
    let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.eql(expected);
  });
  
  it("should preserve spaces", () => {
    let expected = "elp xhm xf mbymwwmfj dne"
    let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    let expected = "jrufscpw"
    let actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
});

describe("check to see if input will be decoded", () => {
  it("should decode a message by using the substitution alphabet", () => {
    let expected = "thinkful"
    let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.eql(expected);
  });
  
  it("should work with any kind of key with unique characters", () => {
    let expected = "message";
    let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.eql(expected);
  });
  
  it("should preserve spaces", () => {
    let expected = "you are an excellent spy"
    let actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    let expected = "thinkful";
    let actual = substitution("jRufScPw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.eql(expected);
  });
});