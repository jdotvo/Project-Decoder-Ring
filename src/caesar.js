// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
//Declare variable to hold array of all letters of alphabet
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    };
    
    if (encode === false){
      shift = shift * (-1);
    };
    
//Make input parameter into lowercase  letters so capital letters can be ignored
    input = input.toLowerCase();
    let encodedMessage = "";
    
//If index of input contains characters that are not included in alphabet array, that character will be added to encoded message without need of a shift
    for (let i=0; i<input.length; i++){
      let character = input[i];
      if (!alphabet.includes(input[i])){
        encodedMessage += input[i];
      }
      for (let i=0; i<alphabet.length; i++){
        if (character === alphabet[i]){
          
//If shift exceeds index beyond length of alphabet array, wrap around from to beginning of alphabet
          if (i+shift>=alphabet.length){
          encodedMessage += alphabet[(i+shift) - alphabet.length];
          }
          
//If shift puts index below 0, wrap around behind to end of alphabet
          else if (i+shift<0) {
          encodedMessage += alphabet[(i+shift) + alphabet.length];
          }
          else {
          encodedMessage += alphabet[(i+shift)];
          }
        }
      }
    }
    return encodedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };