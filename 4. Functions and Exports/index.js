/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

function greet(name) {
    console.log(`Hello, ${name}! Welcome`);
}
greet('Bea Ancheta'); 

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: The difference between a function declaration and a function expression lies in their syntax 
// and timing of definition. Function declarations are hoisted, being loaded before script execution, 
// while function expressions are not hoisted.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

const calculateArea = function(length, width) {
    return length * width;
};

const area = calculateArea(5, 10);
console.log('Area: ', area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function runs once a particular task is finished and is given as argument to another function.
// Example: 
/* function performTask(callback) {
    console.log("Task completed");
    callback();
}

function callbackFunction() {
    console.log("Callback function called");
}

performTask(callbackFunction);
*/

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

let numbers = [
    15, 77, 62, 68, 29, 84,
    61, 89, 55, 63, 29, 19,
    21, 26, 49
];

const modifyArray = function(array, modifierFunction) {
    return array.map(modifierFunction);
}

const modifiedNumbers = modifyArray(numbers, (number) => number + 1);
console.log(`Modified Numbers Array: ${modifiedNumbers}`);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
let num1 = 1;
let num2 = 2;
const mathUtils = require('./mathUtils');

console.log(`Sum of ${num1} and ${num2}: ${mathUtils.add(num1, num2)}`);
console.log(`Value of PI: ${mathUtils.PI}`);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

let result1 = 'level';
let result2 = 'hello';
const isPalindrome = require('./isPalindrome'); 

console.log(`Is '${result1}' a palindrome? ${isPalindrome(result1)}`);
console.log(`Is '${result2}' a palindrome? ${isPalindrome(result2)}`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// In CommonJS, the require function synchronously loads modules at runtime in Node.js, and module.exports 
// is the object returned when the module is required elsewhere. On the other hand, ES6 modules, 
// characterized by the asynchronous import/export keywords, operate during the compile phase. 
// For contemporary development, it's advisable to utilize import/export in most cases.
