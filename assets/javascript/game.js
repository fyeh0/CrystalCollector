$(document).ready(function () {

    // variables
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * 120);

    /* 
    $("#number-generator").text("click", function() {
        var randomNumber = Math.floor(Math.random() * 120);
        console.log(randomNumber);
    });*/

    // random number generator
    console.log("Random number is " + randomNumber);

    var userGuess = 0

    $("#number-generator").text(randomNumber);
    
    $("#amethyst").on("click", function () {
        userGuess = $(Math.floor(Math.random() * 12));
        console.log(userGuess);
    })

    $("#aquamarine").click(function () {
        console.log($(this).val());
    })

    $("#peridot").click(function () {
        console.log($(this).val());
    })

    $("#ruby").click(function () {
        console.log($(this).val());
    })

    // if user guesses correct (user guess === randomnumber), win++ and game restarts
    // if user guesses wrong (user guess != randomenumber), losses++ and game restarts

    // game start, random number generated
    // user crystal clicks generate random value
})