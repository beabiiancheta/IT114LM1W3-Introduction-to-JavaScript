/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
var variable1 = "Hellooo";
console.log(variable1);

// TODO 1.2 Use the let keyword to define a variable.
let variable2 = 40;
console.log(variable2);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
const variable3 = true;
console.log(variable3);
// reassign the value will result in an error or undefined.

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var are globally scoped or function scoped while let and const are block scoped but for const can't be reassigned.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
let num1 = 4;
let num2 = 6;
let add = num1 + num2;
let difference = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
console.log(add);
console.log(difference);
console.log(multiply);
console.log(divide);

// Checkpoint 1.2 What operators did you use?
// Answer: addition (+), subraction (-), multiplication (*) and division (/)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
let name1 = "Bea";
let name2 = "Bianca";
let name3 = name1 + " " + name2;
console.log(name3);

// Checkpoint 1.3 What operators did you use?
// Answer: concatenation operation (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;
console.log(andResult)
console.log(orResult)
console.log(notResult)

// Checkpoint 1.4 What operators did you use?
// Answer: AND (&&), OR (||), NOT (!)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const food = ["pizza", "fries", "spaghetti", "cake", "soup"];
console.log(0 in food);
console.log(3 in food); 
console.log(6 in food); 


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false evaluates to true. The empty array is converted to a string which is an empty string,
// and an empty string is considered falsy. Moreover, comparing strings and booleans results in both being 
//converted to numbers and so that is why they both become 0