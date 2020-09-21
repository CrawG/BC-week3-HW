// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


var wantNumber;
var wantCharacter;
var wantUppercase;
var wantLowercase;

// password value options
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letterUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "X", "T", "U", "V", "W", "X", "Y", "Z"]

specCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var passwordLength;
var options;

// function to generate password
function generatePassword () {

    passwordLength = prompt("How many characters do you want?");

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
        alert("You need to choose password options");
        generatePassword();
    }  
    
    }
    else if (passwordLength <8 || passwordLength >128) {
        alert("Please choose a number between 8 and 128");
        generatePassword();
    }
    else if (typeof passwordLength === 'string') {
        alert("Please choose a numeric value");
        generatePassword();
    }
    
//  Got some tutor help with this part, in order to randomly select the password options, join them together and display the password in the textbox

var password =[]

for (var i = 0; i < passwordLength; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
}

var pwSelection = password.join("");
userInput(pwSelection);
return pwSelection;
}   


function userInput(pwSelection) {
    document.getElementById("password").textContent = pwSelection;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword)

// It Works!!