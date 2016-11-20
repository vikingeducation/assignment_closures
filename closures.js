
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  // Solution:
  // All the clickCallback functions were referencing the same closure variable "i",
  // Now, each clickCallback function will have its own closure variable.
  var clickCallback = function(num) {
    return function() {
      $('#clicked-btn').text('You clicked button #' + num);
    }
  };

  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
     $(buttons[i]).on('click', clickCallback(i));
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

                          // So what goes wrong here?
                          // Solution:
                          // "this" was actully not viking, we need to call viking.mood
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