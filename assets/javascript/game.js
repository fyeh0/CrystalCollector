$(document).ready(function () { 

    // variables
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * 120);
    var amethyst = Math.floor(Math.random() * 12);
    var aquamarine = Math.floor(Math.random() * 12);
    var peridot = Math.floor(Math.random() * 12);
    var ruby = Math.floor(Math.random() * 12);

    // var buttonValue = 
    // new variable - assign random value to each crystal button
    var userGuess = 0

    // random number generator
    $("#number-generator").text(randomNumber);
    console.log("Random number is " + randomNumber);


    // generates random value for each button
    $("#amethyst").on("click", function () {
        $("#user-guess").text(amethyst);
        console.log(amethyst);
    })

    $("#aquamarine").on("click", function () {
        $("#user-guess").text(aquamarine);
        console.log(aquamarine);
    })

    $("#peridot").click(function () {
        $("#user-guess").text(peridot);
        console.log(peridot);
    })

    $("#ruby").click(function () {
        $("#user-guess").text(ruby);
        console.log(ruby);
    })

    // game
    if (userGuess >= randomNumber) {
        alert("You lose!");
        losses++;
    } else if (userGuess === randomNumber) {
        alert("You win!");
        wins++;
    }

    //conditional statement 
    //if userguess is greater or equal to random number, user loses, adds a loss, game restarts
    //if userguess is equal to random number, user gets a point, new game begins

    // game start, random number generated
    // user crystal clicks generate random value
})