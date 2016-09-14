
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
         $(buttons[i]).on('click', function() {
            $('#clicked-btn').text('You clicked button #' + num);
         });
      })(i);
  }


};

// We want the function to execute immediately, but we don't want it to reference the same 'i', so we wrap the setting of the listener in a function that passes in the current 'i' and executes with that immediately. It works because each time the function is called it saves that 'i' in its own closure. 



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);
                          var that = this;
                          //So what goes wrong here?
                          setTimeout( (function() {
                            that.mood = "Happy!";

                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!");
                          }), 1000);
                      }
           };



  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);


};

// 'this' was referring to the window when it was called from the setTimeout callback. So we saved the viking 'this' into 'that' and used this variable instead.









// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});