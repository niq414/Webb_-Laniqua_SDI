//Laniqua Webb Expressions Worksheet March 12 2015

//Dog years

var humanYears = 1;
var dogYears = 7;

var humanYears = prompt("How old is Sparky?");

var sparkyAge = humanYears * dogYears;

console.log(sparkyAge);
alert("Sparky is " +sparkyAge+ " in dog years!");

//Slice of Pie part 1

var pizzaOrdered = 1;
var slices = 1;
var people = 1;

var pizzaOrdered = prompt("How many pizzas were ordered?");
var slices = prompt("How many slices are on each pizza?");
var people = prompt("How many people are at the party?");

var perPerson = pizzaOrdered * slices / people;
console.log(perPerson);
alert("Each person will receive " +perPerson+ " slices of pizza!")

//Slice of pie 2

var leftOver = perPerson%slices
console.log(leftOver);
alert("Sparky will have " +leftOver+ " slices of pizza.");


