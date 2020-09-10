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

//Initializing my password variable as a blank string before I start adding to it
var newPassword = "";

//Functions for looping through the arrays based on which characters were chosen. Each function should return a string value with the attached character.
function lowercaseChoice() {
  //console.log(newPassword);
  newChar = lowercaseCharacters[Math.floor(Math.random() * 26)];
  console.log(newChar);
  newPassword += newChar;
  //console.log(newPassword);
  return newPassword;
}

function uppercaseChoice() {
  //console.log(newPassword);
  newChar = uppercaseCharacters[Math.floor(Math.random() * 26)];
  console.log(newChar);
  newPassword += newChar;
  //console.log(newPassword);
  return newPassword;
}

function specialChoice() {
  //console.log(randomSpecial);
  newChar = specialCharacters[Math.floor(Math.random() * 13)];
  console.log(newChar);
  newPassword += newChar;
  //console.log(randomSpecial);
  return newPassword;
}

function numberChoice() {
  //console.log(randomNumber);
  newChar = numbers[Math.floor(Math.random() * 10)];
  console.log(newChar);
  newPassword += newChar;
  //console.log(randomNumber);
  return newPassword;
}

//Code that prompts the user to input the length of the password and then stores that value as an integer
function generatePassword()
{


var passwordLength = parseInt(prompt("Choose a length of password between 8 and 128"));
console.log("Password Length: " + passwordLength);

if (typeof passwordLength === NaN)
  {alert("Input invalid. Choose a numerical length.");}

//Code that checks if the length is between 8 and 128 characters. Does not continue code if input is invalid. Last conditional should catch any non-numerical inputs, but doesn't fully stop the function right now.
if (passwordLength < 8 || passwordLength > 128)
  {alert("Input invalid. Choose a length between 8 and 128.");}

else 
  {
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
      //Here is where I should invoke the functions that go through the arrays of said characters.
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
//Create arrays for all uppercase chars, lowercase chars, special chars, and numbers
//Have a loop go through all the arrays and select one element randomly
//Create an array the same length that the user wants it to be, fill it with 0 chars until it is the length
//Use a bunch of functions:
//One function at start takes the integer input and then runs it through that loop to create the empty array which is the value returned
//Four separate functions that loop through the different arrays of characters


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
  //  print "not a valid length. input a length between 8 and 128 characters for the password" and end the code
//or if (parseInt(length) === NaN)
  //  print "not a number" and end the code

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