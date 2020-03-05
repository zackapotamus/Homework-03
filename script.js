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
  const SPECIAL = "!@#$%^&*()~=_";
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = LOWERCASE.toUpperCase();
  const NUMERIC = "0123456789";


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

  // let's begin prompting for the options
  do {
    do {
      passwordLength = 0;
      passwordInput = parseInt(prompt("Choose a password length between 8 and 128 characters."));
    } while ((passwordInput != passwordInput)) // check for non numeric input

  } while ((passwordInput < 8) || (passwordInput > 128)) // check that it's within the bounds
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
    isValidated = (lowercaseChosen || uppercaseChosen || numericChosen || specialChosen) // make sure at least one char option was chosen

    if (!isValidated) {
      alert("You must choose at least one character type.");
    }
  }
  while (!isValidated) // if valid options weren't chosen, start over

  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characterPallate[Math.floor(Math.random() * characterPallate.length)]
  }
  // return that impossible-to-crack password ;)
  return generatedPassword;
}