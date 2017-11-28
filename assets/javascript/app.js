
$( document ).ready(function(){

	// setting up variables
	var question1 = 
	{
		question: "There are 50 states in the United States?",
		options: ["True", "False"],
		answer: "True"
	};
	
	var question2 =
	{
		question: "The Buffalo Bills went to the Superbowl 4 years in a row and won twice",
		options: ["True", "False"],
		answer: "False"
	};

	var question3 =
	{
		question: "You should try to follow the DIY (Don't repeat yourself) principle when coding",
		options: ["True", "False"],
		answer: "True"
	};

	var time = 11;
	var timer;

	//setting up timer object
	/*var Timer = 
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
		console.log(countdown)
	}






	//adding click event to start button to begin timer
	$("#play").on ("click", run);

})

