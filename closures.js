
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
    $(buttons[i]).on('click', function() {
      // 'this' is the correct button, but the closure here stores i as 4
      // this happens because i is looked up after the click,
      // which always comes through as 4 because the loop has completed
      // (it i++'ed until i > length...4 )
      // To fix, i'll try replacing the reference to i with a more specific
      // ...reference to the button
      $('#clicked-btn').text('You clicked button #' + buttons.index(this));
      // old code: $('#clicked-btn').text('You clicked button #' + i);
    });
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          //So what goes wrong here?
                          // setTimeout: this = Window
                          // it kept 'viking' in the closure though
                          // so I'll use that
                          setTimeout( (function() {
                            viking.mood = "Happy!";
                            // old code: this.mood = "Happy!";

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