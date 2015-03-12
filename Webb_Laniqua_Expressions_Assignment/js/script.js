//Laniqua Webb Expressions Assignment March 12 2015

//We will be calculating the amount of hot beverages that a group of office workers consume each week

// variables for the coffee and condiments that will be calculated
var hotBeverages = ["Decaf", "Hazelnut", "Bold" ]; //The different types of coffee that office workers can choose from.
var sugarBox= 20; //Each small box of sugar contains 20 cartons of sugar
var creamerBox = 10; //Each box of creamer contains 10 jars of creamer

//Prompts for the array of k cups that will be calculated
hotBeverages[0] = prompt("How many Decaf K cups were used?");//ask the user for the amount of decaf coffee cups
hotBeverages[1] = prompt("How many Hazelnut K cups were used?");//ask the user for hazelnut coffee cups
hotBeverages[2] = prompt("How many Bold K cups were used?");//ask the user for bold coffee cups

//the total amount of beverages equals each type of k cup in the array added together
var totalBeverages = parseInt(hotBeverages[0]) + parseInt(hotBeverages[1]) + parseInt(hotBeverages[2]);//parseInt lets the code know to add the variables together
console.log(totalBeverages);
alert("The total amount of coffee consumed for the week is " +totalBeverages+ " K cups!");//tell the user the total amount of k cups

//condiment variables
sugarBox = prompt("How many boxes of sugar was used?");//ask the user how many boxes of sugar was used
creamerBox = prompt("How many boxes of creamer was used?");//ask the user for the amount of creamer used

condiments = sugarBox * 20 + creamerBox * 10;//the condiments equals the sugar multiplied by 20 added to the creamer multiplied by 10
console.log(condiments);
alert("There were a total of " +condiments+ " condiments used for the week");//tell the user the amount of condiments used for the week

var x =1;//created assignment operator for the stirs that were sent to recycling

var x = prompt("How many stirs were used?")//ask the user how many stirs were used
x++;//the amount of stirs sent to recycling is added by 1 because at the beginning of the week the first stir is removed for sanitation purposes
console.log(x);
alert("There are " +x+ " stirs that will be sent to the recycling bins.");//tell the user the amount of stirs that were sent to recycling.

var a = 5;//assignment operator for the amount of honey drops used
var a = prompt("How many honey drops were used?");//ask the user how many honey drops were used
a--;//the first honey drop is removed at the start of the week for sanitation purposes
console.log(a);
alert("There were " +a+ " honey drops used!");//tell the user how many honey drops were used including the one that was removed at the start of the week




