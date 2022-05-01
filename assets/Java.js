//array options 
var specialChar = ['@', '#', '$', '1', '%', '&', '*', '-', '_', '+', '=', '?', '!'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passwordOptions = [];
var finalPassword = [];

// Get references to the generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = parseInt(prompt('How many characters would you like your password to contain?'))

  

  //validates length
  if (length < 8) {
    alert('Password length must be at least 8 characters')
    return
  }

  if (length > 128) {
    alert('Password length must be less than 128 characters')
    return
  }

  //character confirms
  var hasSpecialChar = confirm('Click OK to include special characters')

  var hasNumChar = confirm('Click OK to include numbers')

  var hasLwrCaseChar = confirm('Click OK to include lowercase characters')

  var hasUpperCaseChar = confirm('Click OK to include uppercase characters')

  //character validation
  if (hasSpecialChar === false && hasNumChar === false && hasLwrCaseChar === false && hasUpperCaseChar === false) {
    alert('Must select at least one character type!')
    return
  }

  //if user confirms character options, add options to passwordOptions array
  if (hasSpecialChar) {
    passwordOptions = passwordOptions.concat(specialChar);
  }

  if (hasNumChar) {
    passwordOptions = passwordOptions.concat(numChar);
  }

  if (hasUpperCaseChar){
    passwordOptions = passwordOptions.concat(upperCaseChar);
  }

  if (hasLwrCaseChar){
    passwordOptions = passwordOptions.concat(lowerCaseChar);
  }
console.log (passwordOptions)

//for loop and math random
  for (var i = 0; i < length; i++ ) {
    var finalPasswordIndex = Math.floor(Math.random() * passwordOptions.length);
    finalPassword.push(passwordOptions[finalPasswordIndex]);
   }
  
  console.log(finalPassword)
  console.log("this is the array of which the logic chooses the characters", passwordOptions)

  console.log('once loop finishes, characters are inserted here', finalPassword)
  return finalPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return finalPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);