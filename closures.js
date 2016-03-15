
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

// What went wrong:
// The button function was in the scope of the outside function, "i" was the same variable for each case. This was "4" because the loop stops at 4. Creating a function which took in a button number and printed out the string fixed it. This is because passing "i" and running the function creates a new closure which preserves the value of the buttonNumber.

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var buttonFunction = function(buttonNumber) {
    $(buttons[buttonNumber]).on('click', function() {
       $('#clicked-btn').text('You clicked button #' + buttonNumber);
    });
  }

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {
    buttonFunction(i);
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

//What went wrong:
// The timeout sets mood on "this". "this" in this case is the window! So the viking's mood was not being changed. Setting mood on the viking explicitly fixed it because we make sure it is changed inside the viking's scope rather than in the window after a timeout.

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          //So what goes wrong here?
                          setTimeout( (function() {
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
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);


};











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});
