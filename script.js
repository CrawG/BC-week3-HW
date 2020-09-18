// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var wantNumber;
var wantCharacter;
var wantUppercase;
var wantLowercase;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letterUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "X", "T", "U", "V", "W", "X", "Y", "Z"]

specCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


var options;


function generatePassword () {

    var passwordLength = parseInt(prompt("How many characters do you want?"));

    if (passwordLength >= 8 && passwordLength <= 128) {

    wantUppercase = confirm("Do you want uppercase letters?");
    wantLowercase = confirm("Do you want lowercase letters?");
    wantCharacter = confirm("Do you want special characters?");
    wantNumber = confirm("Do you want numbers?");

    if (wantCharacter && wantNumber && wantUppercase && wantLowercase) {

        options = specCharacter.concat(number, letter, letterUppercase);
    }
    else if (wantCharacter && wantNumber && wantUppercase) {
        options = specCharacter.concat(number, letterUppercase);
    }
    else if (wantCharacter && wantLowercase && wantUppercase) {
        options = specCharacter.concat(letter, letterUppercase);
    }
    else if (wantNumber && wantLowercase && wantUppercase) {
        options = number.concat(letter, letterUppercase);
    }
    else if (wantCharacter && wantNumber && wantLowercase) {
        options = specCharacter.concat(number, letter);
    }
    else if (wantCharacter && wantUppercase) {
        options = specCharacter.concat(letterUppercase);
    }
    else if (wantCharacter && wantNumber) {
        options = specCharacter.concat(number);
    } 
    else if (wantCharacter && wantLowercase) {
        options = specCharacter.concat(letter);
    } 
    else if (wantLowercase && wantUppercase) {
        options = letter.concat(letterUppercase);
    } 
    else if (wantLowercase && wantNumber) {
        options = letter.concat(number);
    } 
    else if (wantNumber && wantUppercase) {
        options = number.concat(letterUppercase);
    }
    else if (wantUppercase) {
        options = letterUppercase;
    }
    else if (wantLowercase) {
        options = letter;
    }
    else if (wantCharacter) {
        options = specCharacter;
    }
    else if (wantNumber) {
        options = number;
    }
    else if (!wantCharacter && !wantNumber && !wantUppercase && !wantLowercase) {
        alert("you need to choose password options");
        generatePassword()
    }  
    
    }
    else if (passwordLength <8 || passwordLength >128) {
        alert("Please choose a number between 8 and 128");
        generatePassword();
    }
        
}

generatePassword()
