//Laniqua Webb March 19 2015 - Conditionals Assignment


//This Calculator will determine what level of prize a student can have based on how many reward points they received

var Purple = 5;
var green = 4;
var Orange = 3;
var yellow = 1;
var red = 0;

purple = prompt("How many purple days did the student have?");
green = prompt("How many green days did the student have?");
orange = prompt("How many orange days did the student have?");
yellow = prompt("How many yellow days did the student have?");
red = prompt("How many red days did the student have?")

totalpoints = purple * 5 + green * 4 + orange * 3 + parseInt(yellow);
console.log(totalpoints);


if (totalpoints > 1 && totalpoints < 10 && red == 0){
    console.log(totalpoints);
    alert("You have received " +totalpoints+ " points. You may have a sticker!")
}if (totalpoints > 10 && totalpoints < 15){
    console.log(totalpoints);
    alert("You have received " +totalpoints+ " points. You may pick an item from the Treasure Box!")
}if(totalpoints >= 25 && red <= 0){
    console.log(totalpoints);
    alert("You received " +totalpoints+ " points. You have earned a pizza party!");
}else if (red > 1) {
    console.log(totalpoints);
    alert("You have received " + totalpoints + " points and you had " + red + " red day's. Let's work on our behavior!");
}
