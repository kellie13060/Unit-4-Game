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
    $("#curCounter").text(counter);
    console.log("Counter: " + counter);

    function reset (){
        counter = 0;
        numShell = Math.floor(Math.random() * (12 - 1) + 1);
        numWood = Math.floor(Math.random() * (12 - 1) + 1);
        numCoin = Math.floor(Math.random() * (12 - 1) + 1);
        numPink = Math.floor(Math.random() * (12 - 1) + 1);
        randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#numberToWin").text(randomNumber);
        $("#curCounter").text(counter)
        console.log(randomNumber);
    };

    $("#imgShell").on("click", function () {
        counter += numShell;
        console.log("Shell: " + counter);
        $("#curCounter").text(counter);
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
        $("#curCounter").text(counter);
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
        $("#curCounter").text(counter);
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
        $("#curCounter").text(counter);
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