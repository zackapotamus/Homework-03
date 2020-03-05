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

function generatePassword() {
  // Constants
  var SPECIAL = "!@#$%^&*()~=_";
  var LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  var UPPERCASE = LOWERCASE.toUpperCase();
  var NUMERIC = "0123456789";


  // Settings
  var passwordLength; // between 8 and 128 chars
  // lowercase, uppercase, numeric, special chars
  var lowercaseChosen = false;
  var uppercaseChosen = false;
  var numericChosen = false;
  var specialChosen = false;

  var isValidated = false;

  var passwordInput;
  var characterPallate = "";
  var generatedPassword = "";

  do {
    do {
      passwordLength = 0;
      passwordInput = parseInt(prompt("Choose a password length between 8 and 128 characters."));
      console.log(passwordInput);
      console.log(passwordInput != passwordInput);
    } while ((passwordInput != passwordInput))

  } while ((passwordInput < 8) || (passwordInput > 128))
  passwordLength = passwordInput;

  do {
    lowercaseChosen = confirm("Include lowercase characters?");
    if (lowercaseChosen) {
      characterPallate += LOWERCASE;
    }
    uppercaseChosen = confirm("Include uppercase characters?");
    if (uppercaseChosen) {
      characterPallate += UPPERCASE;
    }
    numericChosen = confirm("Include numbers?");
    if (numericChosen) {
      characterPallate += NUMERIC;
    }
    specialChosen = confirm("Include special characters?");
    if (specialChosen) {
      characterPallate += SPECIAL;
    }
    isValidated = (lowercaseChosen || uppercaseChosen || numericChosen || specialChosen)

    if (!isValidated) {
      alert("You must choose at least one character type.");
    }
  }
  while (!isValidated)

  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characterPallate[Math.floor(Math.random() * characterPallate.length)]
  }
  return generatedPassword;
}