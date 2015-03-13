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


//Average Shopping bill

var groceryBill = ["week1", "week2", "week3", "week4", "week5"];

groceryBill[0] = prompt("How much was spent for week 1?");
groceryBill[1] = prompt("How much was spent for week 2?");
groceryBill[2] = prompt("How much was spent for week 3?");
groceryBill[3] = prompt("How much was spent for week 4?");
groceryBill[4] = prompt("How much was spent for week 5?");

var totalBill = groceryBill[0] +groceryBill[1] + groceryBill[2] + groceryBill[3] + groceryBill[4];

console.log(totalBill);
alert("The total spent on groceries was $" +totalBill+ ".");

var average = totalBill / 5;
console.log(average);
alert("The average grocery bill was $" +average+ "." );



