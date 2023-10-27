// JavaScript Total Recall

// 1. Variables & Datatypes

// A. Q + A
// How do we assign a value to a variable?

let variable = true

// How do we change the value of a variable?

varible = false

// How do we assign an existing variable to a new variable?

newVariable = variable

// Remind me, what are declare, assign, and define?

/* declare === naming a variable using let (variable can be changed in the future) or const (no changes in the future)
   assign === setting a value to a variable
   define === naming a function */

// What is pseudocoding and why should you do it?

/* Pseudocoding is defining the logic for a process in plain english or in flow chart before actually writing the code in correct language syntax */

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

/* Depends on the coder (on average I would say 40%) - for those with great code visualizxation skill the time it would take for them to think about 
   how to solve a problem might be shorter. One would need to use this time to solve the logic and the process for the program and then figure out 
   all the edge cases and make sure input validation and other programming best practices will be followed. */

// B. Strings

// Create a variable called firstVariable

let firstVariable

// Assign it the value of the string "Hello World"

firstVariable = 'Hello World'

// Change the value of this variable to some number

firstVariable = 36

// Store the value of firstVariablein a new variable called secondVariable

secondVariable = firstVariable

// Change the value of secondVariable to any string.

secondVariable = 'Change energizes us'

// What is the value of firstVariable? 

console.log(firstVariable) // 36

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string 
// "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

const yourName = 'Emmanuel Efuwape'
console.log('Hello, my name is ' + yourName + '.')

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true
// in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true
// to the console

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a > b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a > d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

//  D. The farm

// Declare a variable animal. Set it to be either "cow" or something else

let animal = 'cow'

// Write code that will print out "mooooo" if it is equal to cow

if (animal === 'cow' || 'Cow' || 'COW') {
    console.log('mooooo')
} else { // Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
    console.log("Hey! You're not a cow.")
}

// Commit

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic

let age

// Write code that will print out "Here are the keys!", if the age is 16 years or 
// older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

age >= 16 ? console.log("Here are the keys!") : console.log("Sorry, you're too young.")