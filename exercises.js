// Hey Carolina Code School Hackers! Enjoy!
// Make sure to open your js consoles!

//                   __
//   _________  ____/ /__
//  / ___/ __ \/ __  / - \
// / /__/ /_/ / / / /  __
// \___/\____/\__,_/\___/
//
// Only add code to *THIS* section!

// #1 Numbers
// declare a variable named 'age' and assign it a number value;
var age = 25;




// #2 Strings
// declare a variable named 'name' and assign it the value of your name;

var name = "Caleb";



// #3 Concatenation
// declare a variable named 'greeting'
// using the 'name' variable you created earlier, assign 'greeting' the value "Hello, [yourname]!";
// e.g. if you set 'name' = 'Mady', 'greeting' should equal "Hello, Mady!"

var greeting = "Hello, " + name + "!";



// #4 Which answer is incorrect?

// Variables can't:

// (a) start with a number
// (b) include spaces or hyphens
// (c) be reserved words like "return", "if", "else", "for", etc. You can find a list of reserved words in JavaScript here.
// (d) contain the special characters "$" and "_"

// set the variable 'answer' equal to a, b, c or d (make sure you set it to a string value)

var answer = "d";



// #5 Which answer is correct?

// Primitive data types in JavaScript include:

// (a) numbers, strings, lists, booleans
// (b) numbers, strings, booleans, dictionaries
// (c) numbers, booleans, undefined, strings
// (d) numbers, objects, undefined, strings

// set the variable 'primitives' equal to a, b, c or d (make sure you set it to a string value)

var primitives = "c";



// #6 Control Flow

// Using the variable weather, complete the if...else if...else statement below
// console.log('Let\'s go swimming!') if it's hot outside
// console.log('Let\'s read a bood!') if it's rainy outside
// console.log('Whatcha wanna do?') if it's neither hot nor raining outside

// you may modify the value of weather to test your code
var weather = 'hot';

// change true to an expression
if (weather == 'hot') {
  console.log("Let\'s go swimming!");
  // console.log() statment to be executed
} else if (weather == 'rain') {
  console.log("Let\'s read a bood!");
  // console.log() statement to be executed
} else {
  console.log("Whatcha wanna do?");
  // console.log() statement to be executed
}

//
//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make the asserts pass by writing
// code in the code section above ;D

console.assert(typeof name === 'string', 'Oops! The variable \'name\' is not a string. Try again!');
console.assert(typeof age === 'number', 'Oops! The variable \'age\' is not a number. Try again!');
console.assert(typeof greeting === 'string', 'Oops! The variable \'greeting\' is not a string. Try again!');
console.assert(greeting.length === name.length + 8, 'Oops! The variable \'greeting\' is not the right length. Try again!');
console.assert(answer === 'd', 'Oops! That\'s the wrong answer for # 4. Try again!');
console.assert(primitives === 'c', 'Oops! That\'s the wrong answer for # 4. Try again!');
