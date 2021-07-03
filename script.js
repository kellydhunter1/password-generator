var generateBtn = document.querySelector("#generate");
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharactersArr = ["+", "-", "&", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "@", "#", "$", "%"];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Write password to the #password input
function writePassword() {
    // Choose password length y/n
    var passwordLength = parseInt(
      prompt('How many characters would you like in your password?')
      );
      // if letters entered or empty
      if (isNaN(passwordLength) === true) {
        alert('Password must be entered as a number.');
        return;
      }
      // if less than 8 prompt more than 8 characters
      if (passwordLength < 8) {
        alert('Password must be at least 8 characters.');
        return;
      }
      // if more than 126 prompt less than 126 characters
      if (passwordLength > 126) {
        alert('Password must be at less than 126 characters.');
        return;
      }

  // Include special characters y/n 
  var specialCharacters = confirm('Select OK to include special charcters.');
  // Include Uppercase
  var uppercase = confirm('Select OK to include uppercase characters.');

  // Include lowercase
  var lowercase = confirm('Select OK to include lowercase characters.');

  // Include numbers
   var numbers = confirm('Select OK to include numeric characters.');

   userCriteria = {
     passwordLength,
     specialCharacters,
     uppercase,
     lowercase,
     numbers
   }
   console.log(userCriteria);

  //  function getRandom() {
  //   var randomCharacter = Math.floor(Math.random());
  //     randomCharacter;
  //  }

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
   }

  // array to hold characters that could be used in password
   var possibleCharacters = [];
  // array to hold characters that needed based on user criteria
   var selectedCharacters = [];

var generatePassword = function() {
  // adds selected criteria into possible characters string and selected characters string
  if (specialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharactersArr);
    selectedCharacters.push(getRandom(specialCharactersArr));
  } if (uppercase === true) {
    possibleCharacters = possibleCharacters.concat(uppercaseArr);
    selectedCharacters.push(getRandom(uppercaseArr));
  } if (lowercase === true) {
    possibleCharacters = possibleCharacters.concat(lowercaseArr);
    selectedCharacters.push(getRandom(lowercaseArr));
  } if (numbers === true) {
    possibleCharacters = possibleCharacters.concat(numbersArr);
    selectedCharacters.push(getRandom(numbersArr));
  }
  // and one character from each selection into selected characters string
selectedCharacters = selectedCharacters.join("");
  var randomizeCharacters = function() {
    possibleCharacters.sort(function (a, b) {return 0.5 - Math.random()});
  }

  randomizeCharacters();
  console.log('possible characters: ' + possibleCharacters,
  'selected characters: ' + selectedCharacters);

var remainingCharacters = [];
remainingCharacters = possibleCharacters.slice(0, passwordLength-selectedCharacters.length);
  // while (selectedCharacters.length < passwordLength) {
  //   selectedCharacters = selectedCharacters.push(getRandom(possibleCharacters));
  // }
remainingCharacters = remainingCharacters.join("");
password = selectedCharacters.concat(remainingCharacters);
console.log(password);
document.getElementById("password").innerHTML = password;
}

generatePassword();


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
