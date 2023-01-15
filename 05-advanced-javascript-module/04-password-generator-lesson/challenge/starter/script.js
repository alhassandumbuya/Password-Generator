// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
let userInput;
let userChoicesArr = []
function getPasswordOptions() {  
  let userInput = parseInt(prompt('How long do you want your password to be?')); 
  if (userInput<10 || userInput>64) {
    alert('Please select a number length between 10 and 64')
    getPasswordOptions()
  }
  else {
    console.log(userInput)
   return userInput
  }
  
}
//collecting consumer choices 
function userChoices() {
  let upperCaseChoices = confirm ('Do you want Uppercases?');
  let lowerCaseChoices = confirm ('Do you want lowercases?');
  let numericChoices = confirm ('Do you want Numbers included?');
  let specialCharactersChoices = confirm ('Do you want $pecial characters?');  
  console.log(upperCaseChoices, lowerCaseChoices, numericChoices, specialCharactersChoices);
}


 




// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
getPasswordOptions()
userChoices()
//console.log(userInput)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);