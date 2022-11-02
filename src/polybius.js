// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

//Declare variable to polybius Square key pair values
  const polybiusSquare = {
    1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e"},
    2: { 1: "f", 2: "g", 3: "h", 4: ("i/j"), 5: "k"},
    3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p"},
    4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u"},
    5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z"},
  };
  
  function polybius(input, encode = true) {
    // your solution code here
    
    if (!input) {
      return false;
    }
    
//Make input into lowercase  letters so capital letters can be ignored and split into indivdual characters
    input = input.toLowerCase().split("");
//Filter out spaces
    let fixedInput = input.filter((space) => space !== " ");
    
    if (encode) {
      let encodedMessage = [];
//Find key value pair of each character in input
      for (let character of input) {
//Accounts for spaces in input
        if (character === " ") {
          encodedMessage.push(" ");
        }
//Loop through columns and rows of polybiusSquare object. Since there are 5 rows and columns, length of indexes for i and j will be < 6
        for (let i=1; i<6; i++){
          for (let j=1; j<6; j++) {
            if (polybiusSquare[i][j].includes(character)){
              encodedMessage.push(j);
              encodedMessage.push(i);
            }
          }
        }
      }
      return encodedMessage.join("");
    };
    
    if (!encode) {
      let decodedMessage = "";
//Return false if length of output is an odd value
      if (fixedInput.length % 2 !== 0) {
        return false;
      }
//Loop with increment of two so we can keep even value index
      for (let i=0; i<input.length; i+=2){
//Accounts for spaces in input
        if (input[i] === " "){
          decodedMessage += " ";
          i--;
        } else {
          decodedMessage += polybiusSquare[input[i+1]][input[i]];
        }
      }
      return decodedMessage;
    }
  }    
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };