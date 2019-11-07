//establish the random number given to get
//number options given and randomly chose


//set the numberGiven to match the target number

//check to see if the numbers match or have gone over

//if the numbers match log the win
//else if the number has gone over log a lose
//else the number is too low do nothing



var counter = 0;

var randomNumber = Math.floor(Math.random() * (120-19) + 19);
console.log(randomNumber);
$("#numberGiven").append(randomNumber);


$("#imgShell").on("click", function() {
    alert("Clicked");
    
});
$("#imgWood").on("click", function() {
    alert("Clicked");
    
});
$("#imgCoin").on("click", function() {
    alert("Clicked");
    
});
$("#imgPink").on("click", function() {
    alert("Clicked");
    
});