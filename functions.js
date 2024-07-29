// exemple function

function printText(text) {
    console.log(text);
}

printText('hello world!');

// a function is needed to print the reversed text

function printReversedText(text) {
    console.log(text.split('').reverse().join(''));
}

printReversedText('hello world!');

/* 

what is a function?
In JavaScript, a function is a block of reusable code that performs a specific task. 
Functions are one of the fundamental building blocks in JavaScript.

Here is the basic syntax of a function:

*/

function functionName(parameters) {
    // code to be executed
  }

/*

functionName: This is the name of the function.
parameters: These are inputs to the function. You can add as many parameters as you want, just separate them with a comma.
The code to be executed by the function is placed inside curly brackets {}.
For example, a function that adds two numbers could look like this:

*/

function addNumbers(a, b) {
    return a + b;
  }

/*

You can call or invoke the function using its name followed by 
parentheses and provide the parameters (if any) inside these parentheses. For example:

*/

let sum = addNumbers(5, 10);
console.log(sum); // Outputs: 15

