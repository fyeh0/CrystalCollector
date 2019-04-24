$(document).ready(function () {

    // setting initial starting variables
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * 120);
    var amethyst = Math.floor(Math.random() * 12);
    var aquamarine = Math.floor(Math.random() * 12);
    var peridot = Math.floor(Math.random() * 12);
    var ruby = Math.floor(Math.random() * 12);
    var userGuess = 0;
    
    function startGame() {
        randomNumber = Math.floor(Math.random() * 120);
        amethyst = Math.floor(Math.random() * 12);
        aquamarine = Math.floor(Math.random() * 12);
        peridot = Math.floor(Math.random() * 12);
        ruby = Math.floor(Math.random() * 12);
        userGuess = 0;
        $("#number-generator").text(randomNumber);
    }

    //function to check score
    function checkScore() {
        // game
        if (userGuess > randomNumber) {
            alert("You lose!");
            losses++;
            $("#lose").text(losses);
            startGame();
        } else if (userGuess === randomNumber) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            startGame();
        }
    }

    // random number generator
    $("#number-generator").text(randomNumber);
    console.log("Random number is " + randomNumber);


    // generates random value for each button
    $("#amethyst").click(function () {
        userGuess = amethyst + userGuess;
        $("#user-guess").text(userGuess);
        console.log(amethyst, userGuess);
        checkScore();
    })

    $("#aquamarine").click(function () {
        userGuess = aquamarine + userGuess;
        $("#user-guess").text(userGuess);
        console.log(aquamarine, userGuess);
        checkScore();
    })

    $("#peridot").click(function () {
        userGuess = peridot + userGuess;
        $("#user-guess").text(userGuess);
        console.log(peridot, userGuess);
        checkScore();
    })

    $("#ruby").click(function () {
        userGuess = ruby + userGuess;
        $("#user-guess").text(userGuess);
        console.log(ruby, userGuess);
        checkScore();
    })
})