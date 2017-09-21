/*Guessing Game by Shai Thrasher*/
/*Initialize variables*/
var totalTurns = 0;
var Games = 0;
var Average = 0;
var playAgain = "y";
var turns = 0;


// alert("totalTurns="+totalTurns+" Games"+Games+" Average"+Average" playAgain"+playAgain)

/* Start Playing */

do {
	Games++
	var Answer = Math.floor(Math.random() * (99) + 1);
	alert(Answer);
	turns = 1
	do	{
		Guess = prompt("Turn: "+turns+" Enter a guess 1-100.")
		if (Guess > Answer){
			alert("Too high.")
			turns++
		}
		else if (Guess < Answer){
			alert("Too low.")
			turns++
			totalTurns++
		}
		else if (isNaN(Guess)){
			alert("You did not enter an integer 1-100. Please try again.");
		}
	}
	while (Guess != Answer)
		if (Guess == Answer){
		alert("Congratulations, you guessed the number.")
		turns++
		totalTurns++
	}
	alert("You found the answer in "+(turns - 1)+" turns");
	Average = (totalTurns / Games)
	alert("Your average turns per game is "+(Average+1)+".");
	alert("You've played the game "+Games+" times.");
	playAgain = prompt("Would you like to play again? (y = yes)");
	}
	while (playAgain =="y");

/* End Playing */