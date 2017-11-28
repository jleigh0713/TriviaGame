
$( document ).ready(function(){

	// setting up variables

	var time = 11;
	var timer;
	var correctGuesses = 0;
	var incorrectGuesses = 0;
	//var selectedAnswer;
/*	var q1 = 
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




	//setting up timer object
	var Timer = 
	{
		count: 30;
		reset: function() //how to reset timer
		{
			this.countdown = 30;
			$('#game-timer).append('this.countdown + seconds remaining');
		}

	//defining how to start
		start: function()
		{
			counter = setInterval(Timer.count, 1000);
		}
	}*/
	$("#q1true").on("click", function()
	{
		correctGuesses++;
		console.log(correctGuesses);
	})


	$("#q1false").on("click", function()
	{
		incorrectGuesses++;
		console.log(incorrectGuesses);
	})


	$("#q2true").on("click", function()
	{
		incorrectGuesses++;
		console.log(incorrectGuesses);
	})


	$("#q2false").on("click", function()
	{
		correctGuesses++;
		console.log(correctGuesses);
	})


	$("#q3true").on("click", function()
	{
		correctGuesses++;
		console.log(correctGuesses);
	})



	$("#q3false").on("click", function()
	{
		incorrectGuesses++;
		console.log(incorrectGuesses);
	})





	function done() 
	{
      clearInterval(timer);
    }


    function reset()
    {
    	time = 11;
    }


	function countdown()
	{
		time--;
		$('#game-timer').html('<p>' + time + '</p>');
		if(time === 0)
		{
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



})

