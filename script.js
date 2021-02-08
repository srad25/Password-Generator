//Assignment Code//

var characterAmount = 0;
var hasUppercase;
var hasLowerCase;
var hasNumbers;
var hasSymbols;

var generateBtn = document.querySelector("#generate");
var generateBtn = addEventListener("click", writePassword)

var numbers = ["0", "1", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["~", "!", "@", "#", "$", "%", "^",  "&", "*", "_", "-", "+", "=", "`", "|", "(", ")", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/"];



// Prompt for character amount (user input)//
function generatePassword() {
  var characterAmount = prompt("How many characters would you like your password to contain?");

    if(characterAmount < 8|| characterAmount > 128) {
      alert("Password length must be between 8-128 characters");
      //Repeat prompt//
      var characterAmount = prompt("How many characters would you like your password to contain?");
      } 

     // Setting password guidelines//

  var hasUpperCase = confirm("Click OK to include uppercase");
  var hasLowerCase = confirm("Click OK to include lowercase");    
  var hasNumbers = confirm("Click OK to include numbers");
  var hasSymbols = confirm("Click OK to include symbols");
      
    //If answer is outside of the guidelines//
      if(hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSymbols=== false) {
        alert("You must choose at least one option");
        var hasUpperCase = confirm("Click OK to include uppercase");
        var hasLowerCase = confirm("Click OK to include lowercase");    
        var hasNumbers = confirm("Click OK to include numbers");
        var hasSymbols = confirm("Click OK to include symbols");  
      }

      //Array to set up loop//
    var pwArray = [];
      
    if (hasUpperCase) {
      pwArray = pwArray.concat(upperCase)
    }

    if (hasLowerCase) {
      pwArray = pwArray.concat(lowerCase)
    }
      
    if (hasNumbers) {
      pwArray = pwArray.concat(numbers)
    }

    if (hasSymbols) {
      pwArray = pwArray.concat(symbols)
  }


    // Loop that generate password//
    var passResult = ""
    
    for (var i = 0; i < characterAmount; i++) {
      passResult = passResult + pwArray[Math.floor(Math.random() * pwArray.length)];
    
    }
    return passResult;
  }


function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
