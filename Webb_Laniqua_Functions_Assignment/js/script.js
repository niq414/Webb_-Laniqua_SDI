//Laniqua Webb -  Functions Assignment - March 26th 2015




var lotteryType;
var Florida;
var power;
var powerNumber;

var lotteryType = prompt("Hello! Would you like to play the Florida Lottery or the Power Ball Lottery? For Florida type Florida. For Power Ball type Power ball.");

function lotteryType (selection){
    var blank = 5;
    lotteryType = prompt("Please select a Lottery.");

    while(selection === ""){
        selection = prompt("Please do not leave blank.");

        if(blank = 5){
            console.log("You did not made a selection.");
            break;
        }
    }
    return selection
}

function randomF1NumGen(min, max){
    var lotteryArray = [];

    for(var f =0; f < 5; f++);{
         randomF1NumGen = Math.random() * (max - min)+ min;
        lotteryArray[f] = Florida;
    }
    return lotteryArray;
}
var florida = randomF1NumGen(1, 53, 5);

console.log("The Florida lottery numbers are " +florida+ ".");
