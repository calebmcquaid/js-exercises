// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

// NUMBER 1: REFACTOR addNumbers

// The below function does not work. The variable twoPlusTwo gets set to undefined.
// Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  'use strict';
  console.log(numberA + numberB);
  return numberA + numberB;
};

var twoPlusTwo = addNumbers(2, 2);

console.log(`Number 1: {twoPlusTwo}`);

// Number 2: yell()
// Write a function named yell that returns an uppercase version of a string
var string = "im all lowercase";


function yell (str) {
  return str.toUpperCase();
};

console.log(yell(string));








// Number 3: yell10()
// Write a function called yell10 that uses your yell function to
// log out an uppercase version of a string 10 times.

function yell10(num) {
  var i;
  for (i = 0; i < num; i++) {
    console.log(yell(string));
  };
};

yell10(10);








// Number 4: longest()

function longest(word1, word2) {
  if(word1.length > word2.length) {
    return word1 + " is longer";
  } else {
    return word2 + " is longer";
  }
};








// Number 5: isVowel()
// Write a function called isVowel that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, uppercase or lowercase. The function should return
// false if the character is not a vowel.

function isVowel (str) {
  var letters = ["a","e","i","o","u","A","E","I","O","U"];
  if (letters.indexOf(str) < 0) {
    return false;
  }
  else {
    return true;
  }
};

console.log(isVowel("b"));
