// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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
let passwordLength = [];
var userChoiceArr = [];



// Function to prompt user for password options
function getPasswordOptions() {
  userChoiceArr = [];
  let passwordLength = prompt ('How many characters do you want in your password?');
    passwordLength =  parseInt(passwordLength);
  if(isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert('Please select a number length between 10 and 64') 
    return false;
  } 
  //Use confirm to get choices 
  if (confirm('Do you want UPPERcase letters?')) {
  userChoiceArr = userChoiceArr.concat(upperCasedCharacters);
 }

 if (confirm('Do you want lowercase letters?')) {
  userChoiceArr = userChoiceArr.concat(lowerCasedCharacters)
 }

 if (confirm('Do you want number characters?')) {
  userChoiceArr = userChoiceArr.concat(numericCharacters)
 }

 if (confirm('Do you want $pecial characters??')) {
  userChoiceArr = userChoiceArr.concat(specialCharacters)
 }
 return true;

}





 


// Function for getting a random element from an array
function getRandom(arr) {
  randomNum = Math.floor (Math.random() * userChoiceArr); 
return getRandom
}

// Function to generate password with user input
function generatePassword() {
var password = "";
for (var i = 0; i < passwordLength; i++) {
  getRandom;
  password = password + userChoiceArr[getRandom];
}
return password;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var userInput = getPasswordOptions();
  var passwordText = document.querySelector('#password');
  if(userInput){
    var randomPassword = generatePassword();
    
    passwordText.value = randomPassword;
  } else
  passswordTest.value = "";
  }


   
    
  
  



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);