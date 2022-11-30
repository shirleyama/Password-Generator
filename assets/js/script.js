// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var passLength;
var useSpecialChars;
var useNumericChars;
var useUpperChars;
var useLowerChars;
// Function to prompt user for password options
function getTypeChar() {
  useSpecialChars = confirm("Would you like to use special characters?");
  useNumericChars = confirm("Would you like to use numeric characters?");
  useUpperChars = confirm("Would you like to use uppercase characters?");
  var useLowerChars = confirm("Would you like to use lowercase characters?");

  if (
    useSpecialChars ||
    useNumericChars ||
    useUpperChars ||
    useLowerChars === true
  ) {
    console.log(useSpecialChars, useNumericChars, useUpperChars, useLowerChars);
    return [useSpecialChars, useNumericChars, useUpperChars, useLowerChars];
  } else {
    alert("You must select at least one character type");
    getTypeChar();
  }
}
function getPasswordOptions() {
  /*var useSpecialChars;
  var useNumericChars;
  var useUpperChars;
  var useLowerChars;*/
  var passLength = prompt("Enter your pass length between 10 and 64");
  if (passLength > 10 && passLength < 64) {
    getTypeChar();
  } else {
    alert("You must enter a pass length between 10 and 64");
    getPasswordOptions();
  }
  console.log(passLength);
  //could be a string here
  return passLength; //as
  //goes to function generatePassword
}
//checking to see what is returned
//getPasswordOptions();
generatePassword();
// Function for getting a random element from an array
//try putting all the different arrays into one giant array
//however it has a parameter arr that expects you to get a random character from a single array that you pass to it
// you could add a little logic to get it from the giant array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var i;
  //var pass='';//try worst password here
  //var details = getPasswordOptions();// loop through and grab a number each time from character set chosen
  //return pass;
  for (var i = 0; i < passLength; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var passGen =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    console.log(passGen);
  }
  console.log(passGen);
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword(); //expects a return from generatePassword function and stores value to the variable password on lhs
    var passwordText = document.querySelector("#password");

    passwordText.value = password; // password variable generated is output to the window here
  }

  // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);
  generateBtn.addEventListener("click", getPasswordOptions);

  // can do
  //var passLength = 35;
  //var passResult = ""
  //for (var count = 1; count <= passLength; count ++){
  // console.log(count)
  //grab random character add it to passResults string
}
