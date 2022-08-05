// Notes for variables
// 1. Variables are used to store values.
// 2. Variables can be declared with the var keyword.
// 3. Variables can be declared with the let keyword.
// 4. Variables can be declared with the const keyword.

//What is let?
//let is a keyword that is used to declare a variable. It is used to declare a variable that can be reassigned.

//difference between let and var?
//let is a block scoped variable.
//What is block scope?
//block scope is the scope of a block of code. A block is a group of statements enclosed in curly braces {}.

//var is a function scoped variable.
//What is function scope?
//When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

let carMake; //creating a variable for make of car

let carModel; //creating a variable for model of car

let carYear; //creating a variable for year of car

console.log(carMake); //expected undefined b/c have not assigned value
console.log(carModel); //expected undefined b/c have not assigned value
console.log(carYear); //expected undefined b/c have not assigned value

carMake = "Honda"; //assigning a string to car make
carModel = "Civic"; //assigning a string to car model
carYear = 2021;

carMake = "Toyota";
carModel = "Tacoma";
carYear = 2022;

console.log(`Car Make: ${carMake}`); //expected 'Honda' because assigned string
console.log(`Car Model: ${carModel}`); //expected 'Civic' because assigned string
console.log(`Car Year: ${carYear}`); //expected '2021' because assigned string

//Challenges:
//Create a new variable for carType that also contains variables created on lines 7, 9 and 11.
//There should be a space between car make, model and year

let carType = carMake + " " + carModel + " " + carYear;
console.log(`Car Type: ${carType}`);
console.log(`Car Details: ${carType}`);

//const example
//block scope
//Give me some examples when someone might want to use const instead of let

const birthYear = 1990; //assigning a number to birth year. Birthyear cannot change.
let currentYear = 2022; //assigning a number to current year. Current year can change.

console.log(birthYear); //expected 1990
console.log(currentYear); //expected 2022

//Challenges:
let age = currentYear - birthYear;
console.log(`My age: ${age}`);

//Create a variable for age and assign it the difference between current year and birth year.

//Add code below this line:

//template literals
//template literals are string literals that allow embedded expressions.
//template literals are enclosed in backticks (`) and embedded expressions are enclosed in ${}

console.log("I want to push my code a second time :)");
