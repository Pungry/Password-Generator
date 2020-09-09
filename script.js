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


// //GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//-send prompts as soon as user clicks the generate button


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//-give prompt that asks for length of password; make sure they input something between 8 and 128
// i.e. var length = prompt("How long do you want the password to be? Must be between 8 and 128 characters")
// if (parseInt(length) < 8 || parseInt(length) > 128)
  //  {go back to the start of question}

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
//-give four confirms in a row asking what character types the user would like, store a boolean value of whether they say yes or no to each prompt for later
//i.e.: if (confirm("Do you want lowercase characters?" === true))
              //{lowercaseChar = true;}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//-make sure that at least one confirm value is true before moving on
//-if (lowercaseChar === false && uppercaseChar === false etc.)
    //{go back to first char question}

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//make an array of each character type that then gets random amounts of each pulled out? and combine them in one long string? idk


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
//-use an alert that shows the combined password which should be stored as a String variable; i.e.: alert(userPasswordFull);