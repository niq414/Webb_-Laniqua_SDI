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

function randomNumGen(min, max){
    var lotteryArray = [];
    var f =0;

    for(var f =0; f < 6; f++);{
         randomNumGen = Math.random() * (max - min)+ min;
        lotteryArray[f] = Florida;
    }
    return lotteryArray;
}
var florida = randomNumGen(1, 53, 5);

console.log("The Florida lottery numbers are " +florida[0]+ +florida[1]+ +florida[2]+ +florida[3]+ florida[4]+ ".");
