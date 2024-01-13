/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
if  (randomNumber % 2 === 0) {
     console.log("even");
} else {
    console.log("odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3) {
    console.log("fizz");
} else if (randomNumber % 5) {
    console.log("buzz");
} else {
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
toDisplay = (randomNumber % 2 === 0) ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used for multiple branching in code based on a specific value. These are useful when having several
// conditions to check against a single variable.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10

for (let i = 1; i <= n; i++) {
    console.log(i);
}


const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
while (index < list.length) {
    console.log(list[index]);
    index++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The difference between do while and while loop, for do while loop checks the conditon after executing the blocka and always executes the block at least once
// while for while loop checks the condition before executing the block.

// TODO 2.7 Use a for of loop to display all the values in the list
for (const value of list) {
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
for (const value in list) {
    console.log(list[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
list.forEach(value => console.log(value));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use for of loop for iterating over iterable arrays or strings. For in loop for iterating over
// object properties. Lastly, .forEach for arrays when you want to perform an action on each element.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("cleaning up resources");
}




