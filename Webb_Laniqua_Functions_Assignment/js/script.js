//Laniqua Webb -  Functions Assignment - March 26th 2015


//Declaring variables that will be used to generate lottery numbers

var lotteryType;
var Florida;
var singlePower;
var powerNumber;


//prompt
lotteryType = prompt("Hello! Are you playing the Florida Lottery or the Power Ball Lottery? For Florida type Florida. For Power Ball type Power ball.");//prompt to determine which lottery the user would like to select

function lotteryOption(selection){//function for lottery type
    var blank = 1;

    while(selection === ""){//while loop if user does not answer
        selection = prompt("Please do not leave blank.");//prompt for no answer
        blank++;

        if(blank === 1){//they can only leave blank once
            console.log("You did not made a selection. Try Again Later.");//if blank then no selection was made
            break;//end the loop
        }
    }
    return selection //tell user which selection was made
}

if(lotteryType === "Florida"){ //conditional that determines the lottery type
    console.log("You selected the Florida Lottery."); //tell the user the lottery type is Florida
    if(lotteryType === "Power ball" || "Power Ball" || "Power")
        console.log("You selected the Power Ball Lottery.");// tell the user the lottery type is power ball
}


function randomNumGen(min, max, num){ //created function to find random numbers

    var lotteryArray = []; //created array to hold numbers

    for (var f = 0; f < num; f++){ //equation for calculating number
         var floridaLottery = Math.round(Math.random() * (max - min)+ min);//math object for pulling  random numbers numbers

        lotteryArray[f] = floridaLottery;//
    }

return lotteryArray //return to main coded
}
florida = randomNumGen(1, 53, 5); //generating random numbers



function powerNumGen(min, max, num) {//function for powerball numbers

    var powerArray = [];//array that holds the numbers

    for (var f = 0; f < num; f++){//math object generating numbers
        var powerNum = Math.round(Math.random() * (max - min)+ min);//get the powerball numbers by using the random generator
powerArray[f] = powerNum;//assigning and array to hold the numbers
    }

    return powerArray;//return to the main code

}

powerNumber = randomNumGen(1, 59, 5);//variable for the powerball numbers

function randomNumGenerator(min, max) {//function to get single powerball number

    var power = Math.round(Math.random() * (max - min)+ min);//randomly generate the single digit

return power; //return power
}

singlePower = randomNumGenerator(1,35, 1); //generate the powerball number

//conditional for telling the user the numbers
if(lotteryType === "Florida"){//if the lottery type is Florida then give the florida numbers
console.log("Your numbers are " +florida+ ".")//tell the user the number

}else{
    console.log("Your numbers are " +powerNumber+ " .The Power Ball is " +singlePower+ ".");//tell the user both the generated numbers and the single powerball number
}

/*Powerball numbers are 35, 10,9,53,29, with PB 5
FL Lottery numbers are 37,50,11,25,6  */




