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

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = prompt("Enter your pass length between 10 and 64");
  if (passLength > 10 && passLength < 64) {
    var useSpecialChars = confirm("Would you like to use special characters?");
    var useNumericChars = confirm("Would you like to use numeric characters?");
    var useUpperChars = confirm("Would you like to use uppercase characters?");
    var useLowerChars = confirm("Would you like to use lowercase characters?");
  }
  console.log(
    passLength,
    useSpecialChars,
    useNumericChars,
    useUpperChars,
    useLowerChars
  );
  //could be a string here
  return [
    passLength,
    useSpecialChars,
    useNumericChars,
    useUpperChars,
    useLowerChars,
  ]; //as boolean
  //goes to function generatePassword
}
//checking to see what is returned

// Function for getting a random element from an array
//try putting all the different arrays into one giant array
//however it has a parameter arr that expects you to get a random character from a single array that you pass to it
// you could add a little logic to get it from the giant array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  //var pass='';//try worst password here
  //var details = getPasswordOptions();// loop through and grab a number each time from character set chosen
  //return pass;
  for (var i = 0; i < 10; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    getPasswordOptions();
    var password = generatePassword(); //expects a return from generatePassword function and stores value to the variable password on lhs
    var passwordText = document.querySelector("#password");

    passwordText.value = password; // password variable generated is output to the window here
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // can do
  //var passLength = 35;
  //var passResult = ""
  //for (var count = 1; count <= passLength; count ++){
  // console.log(count)
  //grab random character add it to passResults string
}
