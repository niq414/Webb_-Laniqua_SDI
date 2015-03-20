//Laniqua Webb March 19 2015 - Conditionals Assignment


//This Calculator will determine what level of prize a student can have based on how many reward points they received

//declaring the variables that will be used
var Purple = 5;//this is the most points awarded per day and means that the student had excellent behavior and went above and beyond
var green = 4;//this means the student had excellent behavior
var Orange = 3;//the student had ok behavior
var yellow = 1;//the student did not have a very good day
var red = 0;//the students behavior was unacceptable

//asking the user for the data that will be calculated
purple = prompt("How many purple days did the student have?");//asking the user for purple days
green = prompt("How many green days did the student have?");//green days are needed for calculating points
orange = prompt("How many orange days did the student have?");//the amount of orange days are needed
yellow = prompt("How many yellow days did the student have?");//yellow days are worth 1 point
red = prompt("How many red days did the student have?")//the student does not receive any points for red days

totalpoints = purple * 5 + green * 4 + orange * 3 + parseInt(yellow);//the total for each color are added to get the total points
console.log(totalpoints);

//conditional statements based on calculations to determine what the student will get
if (totalpoints > 1 && totalpoints < 10 && red == 0){
    console.log(totalpoints);//if there are at least 1 point but less than 10 and the student didn't have red days then they may have a sticker
    alert("You have received " +totalpoints+ " points. You may have a sticker!")
}if (totalpoints > 10 && totalpoints < 15){
    console.log(totalpoints);//if the student has more than 10 points but less than 15 they may go to the treasure box
    alert("You have received " +totalpoints+ " points. You may pick an item from the Treasure Box!")
}if(totalpoints >= 25 && red <= 0){
    console.log(totalpoints);//if the student gets over 25 points and no red days they will get a party
    alert("You received " +totalpoints+ " points. You have earned a pizza party!");
}else if (red > 1) {
    console.log(totalpoints);
    alert("You have received " + totalpoints + " points and you had " + red + " red day's. You will not get a prize.");//if they have a red day there is no prize
}

//ternary
(red >= 1) ? console.log("Good Job!") : console.log("Let's work on our behavior.");//if they have a red day then they need to work on their behavior

//I entered 2 for purple 1 for green 1 for orange 1 for yellow and 0 for red and the console gave me 10 Good Job
