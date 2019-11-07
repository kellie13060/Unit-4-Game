//establish the random number given to get
//number options given and randomly chose


//set the numberGiven to match the target number

//check to see if the numbers match or have gone over

//if the numbers match log the win
//else if the number has gone over log a lose
//else the number is too low do nothing

var counter = 0;
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(randomNumber);
var wins = 0;
var lost = 0;
var numShell = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(numShell);
var numWood = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(numWood);
var numCoin = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(numCoin);
var numPink = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(numPink);
    
$(document).ready(function () {
    $("#numberToWin").text(randomNumber);
    $("#numberOfWins").text(wins);
    $("#numberOfLost").text(lost);
    console.log("Counter: " + counter);

    function reset (){
        counter = 0;
        numShell = Math.floor(Math.random() * (12 - 1) + 1);
        numWood = Math.floor(Math.random() * (12 - 1) + 1);
        numCoin = Math.floor(Math.random() * (12 - 1) + 1);
        numPink = Math.floor(Math.random() * (12 - 1) + 1);
        randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#numberToWin").text(randomNumber);
        console.log(randomNumber);
    };

    $("#imgShell").on("click", function () {
        counter += numShell;
        console.log("Shell: " + counter);
        if (counter === randomNumber) {
            alert("You win somehow, even though this game is impossible!");
            wins += 1;
            $("#numberOfWins").text(wins);
            reset ();
            
        } else if (counter >= randomNumber) {
            alert("You lost!");
            lost += 1;
            $("#numberOfLost").text(lost);
            reset ();
        } 
    });
    
    $("#imgWood").on("click", function () {
        counter += numWood;
        console.log("Wood: " + counter);
        if (counter === randomNumber) {
            alert("You win somehow, even though this game is impossible!");
            wins += 1;
            $("#numberOfWins").text(wins);
            reset ();
        
        } else if (counter >= randomNumber) {
            alert("You lost!");
            lost += 1;
            $("#numberOfLost").text(lost);
            reset ();
        }
    });
    
    $("#imgCoin").on("click", function () {
        counter += numCoin;
        console.log("Coin: " + counter);
        if (counter === randomNumber) {
            alert("You win somehow, even though this game is impossible!");
            wins += 1;
            $("#numberOfWins").text(wins);
            reset ();
        
        } else if (counter >= randomNumber) {
            alert("You lost!");
            lost += 1;
            $("#numberOfLost").text(lost);
            reset ();
        }
    });
    
    $("#imgPink").on("click", function () {
        counter += numPink;
        console.log("Pink: " + counter);
        if (counter === randomNumber) {
            alert("You win somehow, even though this game is impossible!");
            wins += 1;
            $("#numberOfWins").text(wins);
            reset ();
        
        } else if (counter >= randomNumber) {
            alert("You lost!");
            lost += 1;
            $("#numberOfLost").text(lost);
            reset ();
        }
    });
});