// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password?");
  var includeLowercase = prompt("Do you want to include lowercase letters? Enter Y or N");
  var includeUppercase  = prompt("Do you want to include uppercase letters? Enter Y or N");
  var includeNumber  = prompt("Do you want to include numbers? Enter Y or N");
  var includeSpecChar = prompt("Do you want to include special characters? Enter Y or N");
var randomPassword ='';
var randomSelector=[];
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
