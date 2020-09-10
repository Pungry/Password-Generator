// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays of characters that'll be needed for looping through with functions. Goal is to write code that'll randomly take one element from an array the user requested, add it to a string with the push.password. This should loop until the desired length of the password is finished, i.e.: i = 0; i < passwordLength.length(); i++
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "<", ">", "*", "=", "-", "?"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Initializing my password variable as a blank string before I start adding to it in the functions below.
var newPassword = "";

//Functions for looping through the arrays based on which characters were chosen. Each function should return a string value with the attached character.
function lowercaseChoice() {
  //Choosing a lowercase character from an array of 26 characters
  newChar = lowercaseCharacters[Math.floor(Math.random() * 26)];
  console.log(newChar);
  newPassword += newChar;
  return newPassword;
}

function uppercaseChoice() {
  //Choosing an uppercase character from an array of 26 characters
  newChar = uppercaseCharacters[Math.floor(Math.random() * 26)];
  console.log(newChar);
  newPassword += newChar;
  return newPassword;
}

function specialChoice() {
  //Choosing a special character from an array of 13 characters
  newChar = specialCharacters[Math.floor(Math.random() * 13)];
  console.log(newChar);
  newPassword += newChar;
  return newPassword;
}

function numberChoice() {
  //Choosing a number from an array of 10 characters
  newChar = numbers[Math.floor(Math.random() * 10)];
  console.log(newChar);
  newPassword += newChar;
  return newPassword;
}

//Code that prompts the user to input the length of the password and then stores that value as an integer
function generatePassword()
{

var passwordLength = parseInt(prompt("Choose a length of password between 8 and 128"));
console.log("Password Length: " + passwordLength);

//This conditional should catch any non-numerical inputs, but doesn't fully stop the function right now.
if (typeof passwordLength !== "number")
  {alert("Input invalid. Choose a numerical length.");}

//Code that checks if the length is between 8 and 128 characters. Does not continue code if input is invalid. 
else if (passwordLength < 8 || passwordLength > 128)
  {alert("Input invalid. Choose a length between 8 and 128.");}

else 
  { //Validating the user's input if they've provided a valid input.
    alert("Input valid. Creating password of " + passwordLength + " characters.");
    
    //Getting boolean values here to send to the functions that'll run the functions that actually generate characters for the password
    var lowercaseUse = confirm("Do you want lowercase characters in your password?");
    var uppercaseUse = confirm("Do you want uppercase characters in your password?");
    var specialCharUse = confirm("Do you want special characters in your password?");
    var numberUse = confirm("Do you want numbers in your password?");

    //Checking if the user even gave the okay to using one type of character
    if (lowercaseUse === false && uppercaseUse === false && specialCharUse === false && numberUse === false)
      {
        alert("You cannot make a character-based password if you do not choose any characters to use in your password.");
      }

    //Trying to write code that validates the user's input as workable and indicate what characters they've chosen to fill their password with. Not sure how to do that efficiently.
    if (lowercaseUse === true || uppercaseUse === true || specialCharUse === true || numberUse === true)
      {
        alert("Duly noted. You would like a password with: ");
        if (lowercaseUse === true)
        {
          alert("Lowercase Characters");
        }
        if (uppercaseUse === true)
        {
          alert("Uppercase Characters");
        }
        if (specialCharUse === true)
        {
          alert("Special Characters");
        }
        if (numberUse === true)
        {
          alert("Numbers");
        }

      //Here is where the loop for generating the password actually starts. It will go as long as the password length.
        for (var i = 0; i < passwordLength; i++)
          {
            //Chooses a random number between 0 and 3 to determine randomly what should be the next character in the password. Each time the loop happens, the number gets reset.
            var charChoice = Math.floor((Math.random() * 4));

            if (charChoice === 0 && lowercaseUse === true)
            {console.log("lowercase Use + 1" + i);
            lowercaseChoice();}

            else if (charChoice === 1 && uppercaseUse === true)
            {console.log("uppercase Use + 1" + i);
            uppercaseChoice();}

            else if (charChoice === 2 && specialCharUse === true)
            {console.log("special char Use + 1" + i);
            specialChoice();}

            else if (charChoice === 3 && numberUse === true)
            {console.log("numbers Use + 1" + i);
            numberChoice();}

            //If the random number generated is not from one of the character sets the user wants, i is decreased in order to run the loop the proper number of times to reach the correct password length.
            else 
            {
              i--;
            }
          }
        console.log(newPassword);
      }
    
  }
  return newPassword;
}