// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var randomSelector=[];

function getLowercaseLetter(){
  
  var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var lowerLetter = '';

    lowerLetter = lowercaseArray[Math.floor(Math.random() * 25)];
return lowerLetter;
  };


function getUppercaseLetter(){

  var upperLetter = '';
  var uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
    upperLetter = uppercaseArray[Math.floor(Math.random() * 25)];
  
  
  return upperLetter;
};

function getNumber(){
 
  var number = '';
  var numberArray = ['0','1','2','3','4','5','6','7','8','9','0'];
  
    number = numberArray[Math.floor(Math.random() * 10)];
  
  
  return number;
};

function getSpecChar(){

  var specCharacter = '';
  var specCharArray =[' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
 
    specCharacter = specCharArray[Math.floor(Math.random() * 32)];
  
  
  return specCharacter;
};

function promptUpper(){
  var include = prompt("Do you want to include uppercase letters? Enter Y or N");
if (include.toLowerCase() != 'y' && include.toLowerCase() != 'n'){
  alert('Please enter a valid answer!');
  include = promptUpper();
}
  return include;
};

function promptLower(){
  var include = prompt("Do you want to include lowercase letters? Enter Y or N");
if (include.toLowerCase() != 'y' && include.toLowerCase() != 'n'){
  alert('Please enter a valid answer!');
  include = promptLower();
}
  return include;
};

function promptNumber(){
  var include = prompt("Do you want to include numbers? Enter Y or N");
if (include.toLowerCase() != 'y' && include.toLowerCase() != 'n'){
  alert('Please enter a valid answer!');
  include = promptNumber();
}
  return include;
};

function promptSpecial(){
  var include = prompt("Do you want to include special characters? Enter Y or N");
if (include.toLowerCase() != 'y' && include.toLowerCase() != 'n'){
  alert('Please enter a valid answer!');
  include = promptSpecial();
}
  return include;
};
function promptForCharacters(){
  var includeLowercase = promptLower();
  var includeUppercase  = promptUpper();
  var includeNumber  = promptNumber();
  var includeSpecChar = promptSpecial();


if (includeLowercase.toLowerCase() === 'y'){
  randomSelector.push('0');
 
 }

 if (includeUppercase.toLowerCase() === 'y'){
  randomSelector.push('1');
 }

if (includeNumber.toLowerCase() === 'y'){
randomSelector.push('2');
}
if (includeSpecChar.toLowerCase() === 'y'){
randomSelector.push('3');
}
if (randomSelector.length === 0){
  alert("You must choose at least one type of character!")
  promptForCharacters();
}
};

function charsInPassword(){
  var length = prompt("How many characters would you like in your password?");
  if (length < 8 || length > 128){
    alert("You must choose between 8 and 128 characters!");
    length = charsInPassword();
  }
return length;
}
function generatePassword() {
  randomSelector = [];
  var randomPassword ='';
 var passwordLength = charsInPassword();

  promptForCharacters();
 
for (i=0; i < passwordLength; i++){

var selector = randomSelector[Math.floor(Math.random() * randomSelector.length)];

if (selector === '0'){
  randomPassword = randomPassword + getLowercaseLetter();
}
if (selector === '1'){
  randomPassword = randomPassword + getUppercaseLetter();
}
if (selector === '2'){
  randomPassword = randomPassword + getNumber();
}
if (selector === '3'){
  randomPassword = randomPassword + getSpecChar();
}

}

  return randomPassword;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
