// Assignment code here
//when generate button is clicked, series of prompts to choose criteria
function passwordCriteria() {

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
  var upperCase = confirm('Select OK to include uppercase characters.');

  // Include lowercase
  var lowerCase = confirm('Select OK to include lowercase characters.');

  // Include numbers
   var numbers = confirm('Select OK to include numeric characters.');

  // stored user input
  var selectedCharacters = {
    length: length,
    specialCharacters: specialCharacters,
    upperCase: upperCase,
    lowerCase: lowerCase,
    numbers: numbers
  };
  return selectedCharacters;
}

// confirm choice

// password is displayed on page





















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
