$(document).ready(function() {

    $("#number-generator").text("click", function() {
        var randomNumber = Math.floor(Math.random() * 120) - 19;
        console.log(randomNumber);
    });
})