//Laniqua Webb -  Functions Assignment - March 26th 2015


//Declaring variables

var lotteryType;
var Florida;
var power;
var powerNumber;

var lotteryType = prompt("Hello! Would you like to play the Florida Lottery or the Power Ball Lottery? For Florida type Florida. For Power Ball type Power ball.");//prompt to determine which lottery the user would like to select

function lotteryType (selection){//function for lottery type
    var blank = 5;
    lotteryType = prompt("Please select a Lottery.");//prompt if user leaves blank

    while(selection === ""){
        selection = prompt("Please do not leave blank.");//prompt for no answer

        if(blank = 5){
            console.log("You did not made a selection.");//if blank then no selection was made
            break;//end the loop
        }
    }
    return selection //tell user which selection was made
}

function randomNumGen(min, max){ //created number generator to find random numbers
    var lotteryArray = []; //created array to hold numbers

    for(var f = 0; f < 6; f++);{
         florida = Math.random() * (max - min)+ min;//
        lotteryArray[f] = Florida;
    }
    return lotteryArray;
}
florida = randomNumGen(1, 53, 5);


