// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log('Squares:', squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log('Uppercase Words:', uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(word => word.length > 4);
console.log('Words with More Than Four Letters:', longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((acc, word) => acc + ' ' + word, '');
console.log('Concatenated String:', concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 

// Map transforms each element of an array using a provided function, creating a new array.
// Filter selects elements from an array based on a specified condition, generating a new array.
// Reduce applies a function to each array element, producing a single accumulated value.
