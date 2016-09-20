var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function () {

	//There's a problem with this function
	var buttons = $('button');

	var showText = function (i) {
		$(buttons[i]).on('click', function () {
			$('#clicked-btn').text('You clicked button #' + i);
		});
	};

	// No matter what I click, it always picks the same element
	// could it be CLOSURES???
	for (var i = 0; i < buttons.length; i++) {
		showText(i);
	};

}

// Solution is to create 4 new child function which takes a parameter.



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function () {

	var viking = {
		mood: undefined,
		cheerUp: (function () {
			//This part works!
			//Otherwise, it would be undefined
			console.log('sad');
			this.mood = "sad.";
			$('#mood').text(this.mood);

			//So what goes wrong here?
			setTimeout((function () {
				viking.mood = "Happy!";

				//THIS even runs correctly!
				//What is UP with this? :(
				console.log("Cheered Up!")
			}), 1000);
		})
	};



	viking.cheerUp();

	//waits an extra millisecond to make sure
	//that the other setTimeout has run.
	//The problem is NOT here
	setTimeout(function () {
		$('#mood').text(viking.mood);
	}, 1001);


};









// Don't touch this. Just the setup

$(document).ready(function () {

	assignments.one();
	assignments.two();


});
