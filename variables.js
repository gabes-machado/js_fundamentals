// diferences between var, let and const

/*

In JavaScript, var, let, and const are used to declare variables, but they have some differences:

var:
It is the oldest keyword to declare a variable in JavaScript.
- var declarations are globally scoped or function scoped. This means that any variable that is declared with var outside 
a function block is available for use in the whole window var is function scoped when it is declared within a function.
- var variables can be updated and re-declared within its scope2.
- var variables are hoisted to the top of their scope and initialized with a value of undefined2.

let:
- let is an improved version of var and was introduced in ES61.
- let variables are block scoped21. This means they can only be accessed within the block they were declared.
- let variables can be updated but not re-declared21.

const:
- const also has block scope21.
- const variables can neither be updated nor re-declared21. This means once a const variable has been assigned, you cannot change its value or re-declare it.

Good practice:
In general, developers are advised to use let and const instead of var to avoid confusion and bugs3. Use let when you know that the value of a variable will change, and use const when the value is constant and won’t change3.

*/

// Example: triangle area

var height = 5;
var base = 10;
var area = (base * height) / 2;

console.log(area)

// type convert

// implicit convert

const number = 456;
const numberString = '456';

console.log(number == numberString) // true

// explicit convert

console.log(Number(numberString) === number) // true

/*

different types of '=': '=' atribuition, '==' loose equality performs type coercion
meaning it converts the operands to a common type before comparison It can lead to unexpected results due to implicit type conversions.
'===' strict equality does not perform type coercion, and considers operands of different types to be different.
It is generally recommended to use strict equality to avoid unexpected results due to implicit type conversions.

*/

// template strings

const name = 'Gabriel';
const age = 22;
const city = 'Brasília';

console.log('Meu nome é ${name}, tenho ${age} anos e moro em ${city}.')
