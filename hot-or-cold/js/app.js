
$(document).ready(function(){

var count = 0;
var num;
var guess = $("#userGuess").val();


function randomNum(){
  num = Math.floor((Math.random() * 100) + 1);
}

  randomNum();
  console.log(num);
  


var diff = Math.abs(guess, num);



function incrementCounter(){
  count++; 
  $('#count').text(count);
}


function checkGuess(guess){
  var guessInt = parseInt(guess);

  if (isNaN(guess)) {
      alert("Input a number");
    } else if (guess < 1 || guess > 100) {
      alert("Input numbers between 1 and 100");
    } else{
    if (guess == num){
    $("#feedback").text("Congrats");
  } else if (diff >= 1 && diff <= 10){
    $("#feedback").text("Getting Very Hot");
  } else if (diff < 10 && diff <= 20){
    $("#feedback").text("You're Getting Hotter");
  } else if (diff < 20 && diff <= 30){
    $("#feedback").text("Warmer");
  } else if (diff < 30 && diff <= 50){
    $("#feedback").text("Way Off Cold");
  } else if ( diff > 50){
    $("#feedback").text("Frosty Cold");
  } 
}
} 
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    $("#guessButton").click(function(e){
      e.preventDefault();
      var guess = $("#userGuess").val();
      var guessEl = '<li>' + guess + '</li>';
      $('#guessList').append(guessEl);
      $('#userGuess').val('');
      incrementCounter();
      checkGuess(guess);
    });

function newGame(){
  $(".new").on('click', function(){
    window.location.reload(true);
  });

}


});
