//store the human player score and the computer (bot)
//score in variables
var humanScore = 0;
var computerScore = 0;

//write a 'play' function that handles the different conditions of gameplay
//depending on being passed an argument string for "rock", "paper",
//or "scissors" - the human user choice
function play(humanPlay) {

  //call the return functio to get a random 'bot' choice
  var computerPlay = getComputerPlay();
  var plays, play;

  return play;
}

var plays = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * plays.length);
var play = plays[i];

//update the #status to display who played what
//use jQuery .html()

$("#status").html("You selected " + humanPlay + ". The bot selected " + computerPlay + "");

//write a conditional block for a human "rock" choice
//this will have a nested conditional for the "computer" choice
//use jQuery .append() to update the #status

//write a conditional block for a human "paper" choice
//this will have a nested conditional for the "computer" choice
//use jQuery .append()

//write a conditional block for a human "scissors" choice
//this will have a nested conditional for the "computer" choice
//use jQuery .append()

//update the #humanScore and #computerScore elements
//use jQuery .html()
if (humanPlay === "rock") {

  if (computerPlay === "rock") {
    // tie
    $('status').append("You Tie!");
  } else if (computerPlay === "paper") {
    // human lose
    $('status').append("You Lose!");
    computerScore++;
  } else if (computerPlay === "scissors") {
    // human wins
    $('status').append("You win!");
    humanScore++;
  }
} else if (humanPlay === "paper") {

  if (computerPlay === "rock") {
    // win
    $('status').append("You win!");
    humanScore++;
  } else if (computerPlay === "paper") {
    // tie
    $('status').append("You Tied!");
  } else if (computerPlay === "scissors") {
    // lose
    $('status').append("You Lose!");
    computerScore++;
  }
} else if (humanPlay === "scissors") {
  if (computerPlay === "rock") {
    // lose
    $('status').append("You Lose!");
    computerScore++;
  } else if (computerPlay === "paper") {
    // win
    $('status').append("You win!");
    humanScore++;
  } else if (computerPlay === "scissors") {
    // tie
    $('status').append("You Tie!");
  }

}


//write a function that randomly picks a 'bot' choice from
//an array of options and returns it
function getComputerPlay() {
  var plays = ["rock", "paper", "scissors"];
  // var i = Math.floor (Math.random() * plays.length);
  // var play = plays [i];

  var randomPlayNumber = Math.floor()

  return play;
}

//define three click handler functions for the
//#rock, #paper and #scissors buttons. They should all call a
//generic 'play' function, passing in "rock", "paper", or "scissors"
//as a string argument.
function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

//bind the #rock, #paper and #scissors buttons to their
//relevant click handler functions
$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);
