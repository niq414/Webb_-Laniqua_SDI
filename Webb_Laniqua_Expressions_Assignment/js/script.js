//Laniqua Webb Expressions Assignment March 12 2015

//We will be calculating the amount of hot beverages that a group of office workers consume each week

var hotBeverages = ["Decaf", "Hazelnut", "Bold" ];
var sugarBox= 20;
var creamerBox = 10;


hotBeverages[0] = prompt("How many Decaf K cups were used?");
hotBeverages[1] = prompt("How many Hazelnut K cups were used?");
hotBeverages[2] = prompt("How many Bold K cups were used?");


var totalBeverages = parseInt(hotBeverages[0]) + parseInt(hotBeverages[1]) + parseInt(hotBeverages[2]);
console.log(totalBeverages);
alert("The total amount of coffee consumed for the week is " +totalBeverages+ " K cups!");

sugarBox = prompt("How many boxes of sugar was used?");
creamerBox = prompt("How many boxes of creamer was used?");

condiments = sugarBox * 20 + creamerBox * 10;
console.log(condiments);
alert("There were a total of " +condiments+ " condiments used for the week");
