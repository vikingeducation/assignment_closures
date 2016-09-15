
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
    (function(num) {
      $(buttons[num]).on('click', function() {
         $('#clicked-btn').text('You clicked button #' + num);
      });
    })(i);

  }


}

// In the original method the value of I was being iterated to four and all child functions were sharing that one value.

// In the revised function we are creating a new scope by wrapping everything in an anonymous funciton. We then immediately evaluate the new anonymous function preserving each value of i as it is iterated.


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
                          var that = this;
                          //So what goes wrong here?
                          setTimeout(function() {
                            that.mood = "Happy!";

                            //THIS even runs correctly!
                            //What is UP with this?
                            console.log("Cheered Up!");
                          }, 1000, that);
                      })
           };



// In the original function the anonymous function in setTimeout references 'this'. This, in that anonymous funciton is not the viking object but the global window. It should actually reference the viking.
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
