"use strict";

var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');
  var textFunc = function(buttonNum){
    return function(){
      $('#clicked-btn').text('You clicked button #' + buttonNum);
    }
  };

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {
    // somehow, i is always the same value
     $(buttons[i]).on('click', textFunc(i));
  }


};

// Issue with assignment one.  Function assigned to click isn't run
// until we click the button.  At this point "i" has been set to the 
// final value of the loop.  Its kept by closure of the assignments.one function

// If we create a function that returns another function the "buttonNum"
// will get set during the loop, instead of just being referenced
// later when the event is handled


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
                          setTimeout( (function() {
                            viking.mood = "Happy!";
                            // this.mood = "Happy!";

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


//The issue with assignment two is related to scope, within the setTimeout
//function "this" is the window object, not the viking object











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});