
$( document ).ready(function(){

	// setting up variables

	var time = 9;
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
	//var guessNum = 0;
	//var selectedAnswer;
	/*var q1 = 
	{
		question: "There are 50 states in the United States?",
		options: ["True", "False"],
		correctAnswer1: "True",
	};
	var q2 =
	{
		question: "The Buffalo Bills went to the Superbowl 4 years in a row and won twice",
		options: ["True", "False"],
		correctAnswer2: "False",
	};
	var q3 =
	{
		question: "You should try to follow the DIY (Don't repeat yourself) principle when coding",
		options: ["True", "False"],
		correctAnswer3: "True",
	};

	}*/

	$("#q1true").on("click", function()
	{
		//correctGuesses++;
		q1rightGuess = 1;
		q1wrongGuess = 0;
		/*if (correctGuesses >= 2) 
		{
			correctGuesses = 1;
			alert("You already made your selection. Please continue to next question.");
		}*/
	})

	/*$("#q1true, #q2false, #q3true").on("click", function()
	{
		correctGuesses++;
		if(correctGuesses >= 2)
		{
			alert("You have already selected your answer.  Please continue onto the next question.");
			correctGuesses
		}

	})*/

	$("#q1false").on("click", function()
	{
		q1rightGuess = 0;
		q1wrongGuess = 1;
		
	})

	/*$("#q1false, #q2true, #q3false").on("click", function()
	{
		incorrectGuesses++;
	})*/


	$("#q2true").on("click", function()
	{
		q2rightGuess = 0;
		q2wrongGuess = 1;
	})


	$("#q2false").on("click", function()
	{
		q2rightGuess = 1;
		q2wrongGuess = 0;
	})


	$("#q3true").on("click", function()
	{
		q3rightGuess = 1;
		q3wrongGuess = 0;
		/*done();
		reset();
		alert("Let's see how you did!");
		$('#rightGuesses').html('<p>' + 'Correct Guesses: ' + correctGuesses +'<p>');
		$('#wrongGuesses').html('<p>' + 'Incorrect Guesses: ' + incorrectGuesses + '<p>');*/
	})



	$("#q3false").on("click", function()
	{
		q3rightGuess = 0;
		q3wrongGuess = 1;
		/*done();
		reset();
		alert("Let's see how you did!");
		$('#rightGuesses').html('<p>' + 'Correct Guesses: ' + correctGuesses +'<p>');
		$('#wrongGuesses').html('<p>' + 'Incorrect Guesses: ' + incorrectGuesses + '<p>');*/
	})

   /*function guessesSkipped()
    {
    	if(correctGuesses > incorrectGuesses)
      	{
      		skippedGuesses = correctGuesses - incorrectGuesses;
      	}
      	else
      	{
      		skippedGuesses = incorrectGuesses - correctGuesses;
     	}
    }*/


	function done() 
	{
      clearInterval(timer);
      correctGuesses = q1rightGuess + q2rightGuess + q3rightGuess;
      incorrectGuesses = q1wrongGuess + q2wrongGuess + q3wrongGuess;
      //guessesSkipped();
      skippedGuesses = 3 - (correctGuesses + incorrectGuesses);
    }


    function reset()
    {

		$('#game-timer').empty();
    	time = 9;
    }


	function countdown()
	{
		time--;
		$('#game-timer').html('<p>' + time + '</p>');

		if(time === 0)
		{
			alert('Times Up!')
			done();
			reset();
		}
	}


	function run()
	{
		timer = setInterval(countdown, 1000);
	}

	//adding click event to start button to begin timer
	$("#play").on ("click", run);

	$('#done').click(function()
		{
			$('#main').hide();
			done();
			reset();
			$('#rightGuesses').html('<p>' + 'Correct Guesses: ' + correctGuesses +'<p>');
			$('#wrongGuesses').html('<p>' + 'Incorrect Guesses: ' + incorrectGuesses + '<p>');
			$('#skippedGuesses').html('<p>' + 'Missed Guesses: ' + skippedGuesses + '<p>');
		});
})

