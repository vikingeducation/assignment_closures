
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???

  var clicked_button_text = function(n) {
    $(buttons[n]).on('click', function() {
       $('#clicked-btn').text('You clicked button #' + n);
    });
  };

  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
    //  $(buttons[i]).on('click', function() {
    //     $('#clicked-btn').text('You clicked button #' + i);
    //  });
    clicked_button_text(i);
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function() {

  var viking = {
    mood: undefined,
    cheerUp: (function() {
      //This part works!
      //Otherwise, it would be undefined
      console.log('sad');
      this.mood = "sad.";
      $('#mood').text(this.mood);
      //So what goes wrong here?
      setTimeout( (function() {
        // `this` was being set to the window object
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
