// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
//Alphabet parameter must exist and be a string of exactly 26 characters
    if(!alphabet || alphabet.length !== 26){
      return false;
    }
    
//Split up alphabet parameter into individual letters
    let actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let subAlphabet = alphabet.split("");
    
//All characters in alphabet parameter must be unique and non-repeatable
    if (![...alphabet].every((letter) => alphabet.indexOf(letter) === alphabet.lastIndexOf(letter))
    )
      return false;
    
    let actualArray = [...actualAlphabet];
    let subArray = [...subAlphabet];
//Turn input parameter into lowercase so capital letters can be ignored
    input = [...input.toLowerCase()];
    for (let letter in input) {
      if (input[letter] === " ") {
//Preserves spaces in between 
        input[letter] = " ";
      } else {
//Encodes or decodes letters depending on whichever options is selected
        encode ? (input[letter] = subArray[actualArray.indexOf(input[letter])])
               : (input[letter] = actualArray[subArray.indexOf(input[letter])]);
      }
    }
//Joins letters back together to make a single block of text
    return input.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };