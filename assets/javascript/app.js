
$( document ).ready(function(){

	// setting up variables
	var time = 11;
	var timer;
	var correctGuesses = 0;
	var incorrectGuesses = 0;
	var q1rightGuess = 0; 
	var q1wrongGuess = 0;
	var q2rightGuess = 0;
	var q2wrongGuess = 0;
	var q3rightGuess = 0;
	var q3wrongGuess = 0;
	var skippedGuesses = 0;

	//hiding the stats section
	$('#stats').hide();

	/*on click event for question 2 true button,collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q1true").on("click", function()
	{
		q1rightGuess = 1;
		q1wrongGuess = 0;
	})

	/*on click event for question 1 false button,collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q1false").on("click", function()
	{
		q1rightGuess = 0;
		q1wrongGuess = 1;
	})

	/*on click event for question 2 true button,collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q2true").on("click", function()
	{
		q2rightGuess = 0;
		q2wrongGuess = 1;
	})

	/*on click event for question 2 false button,collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q2false").on("click", function()
	{
		q2rightGuess = 1;
		q2wrongGuess = 0;
	})

	/*on click event for question 3 true button,collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q3true").on("click", function()
	{
		q3rightGuess = 1;
		q3wrongGuess = 0;
	})

	/*on click event for question 3 false button, collect count/value for the correct one and if chosen it over rides what may have been previosuly chosen
	as an answer for the same question*/
	$("#q3false").on("click", function()
	{
		q3rightGuess = 0;
		q3wrongGuess = 1;
	})

	//defining function for when the game is done
	function done() 
	{
      clearInterval(timer);
      correctGuesses = q1rightGuess + q2rightGuess + q3rightGuess;
      incorrectGuesses = q1wrongGuess + q2wrongGuess + q3wrongGuess;
      skippedGuesses = 3 - (correctGuesses + incorrectGuesses);
    }

    //defining function in order to reset the timer
    function reset()
    {
		$('#game-timer').empty();
    	time = 11;
    }

    //defining function to show stats pages when hitting the done button or when the timer has run out
	function endGame()
	{
		done();
		reset();
		$('#stats').show();
		$('#main').hide();
		$('#rightGuesses').html('<p>' + 'Correct Guesses: ' + correctGuesses +'<p>');
		$('#wrongGuesses').html('<p>' + 'Incorrect Guesses: ' + incorrectGuesses + '<p>');
		$('#skippedGuesses').html('<p>' + 'Skipped Guesses: ' + skippedGuesses + '<p>');
	}

	// defining function to display timer and what happens as it countdowns and gets to zero
	function countdown()
	{
		time--;
		$('#game-timer').html('<p>' + time + '</p>');

		if(time === -1)
		{
			alert('Times Up!')
			done();
			reset();
			endGame();
		}
	}

	//defining function to set timer 
	function run()
	{
		timer = setInterval(countdown, 1000);
	}

	//adding click event to Start button to begin timer
	$("#play").on("click", run);

	//adding click event to Done button to end timer, reset game and to show the Stats section
	$('#done').on("click", endGame);

	//adding click event to the Play Again button
	$("#play-again").on("click", function()
	{
		location.reload();
	})

})

