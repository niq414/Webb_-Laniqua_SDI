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

if(lotteryType === "Florida"){
    console.log("You selected the Florida Lottery.");
    if(lotteryType === "Power ball" || "Power Ball" || "Power")
        console.log("You selected the Power Ball Lottery.");
}


function randomNumGen(min, max, num){ //created number generator to find random numbers

    var lotteryArray = []; //created array to hold numbers

    for (var f = 0; f < num; f++){
         var floridaLottery = Math.round(Math.random() * (max - min)+ min);
        lotteryArray[f] = floridaLottery;
    }
return lotteryArray
}
florida = randomNumGen(1, 53, 5);



function powerNumGen(min, max, num) {

    var powerArray = [];

    for (var f = 0; f < num; f++){
        var powerNum = Math.round(Math.random() * (max - min)+ min);
powerArray[f] = powerNum;
    }

    return powerArray

}

powerNumber = randomNumGen(1, 59, 5);

function randomNumGenerator(min, max) {

    var power = Math.round(Math.random() * (max - min)+ min);

return power
}

singlePower = randomNumGenerator(1,35, 1);

if(lotteryType === "Florida"){
console.log("Your numbers are " +florida+ ".")

}else{
    console.log("Your numbers are " +powerNumber+ " .The Power Ball is " +singlePower+ ".");
}




