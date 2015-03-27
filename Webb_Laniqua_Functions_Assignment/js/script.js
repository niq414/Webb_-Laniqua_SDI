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

function randomNumberGenerator(min,max,num){
    var lotteryArray = [];

    for(var f =0; f<6; f++);{
         randomNumberGenerator = math.round(math.random() * (max-min)+ min);
        lotteryArray[l] = randomNumberGenerator();
    }
    return lotteryArray;
}
var florida = random(1, 53, 5);

console.log("The Florida lottery numbers are " + + ")
