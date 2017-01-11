
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

// Before fix: All created handlers were accessing i from the same parent
// function's closure. So, the value of i changed with each iteration and ended
//  at four

// After fix: Moved function definition outside of the loop and had it
// take i as an argument and return a new anonymous function,
// this creates a new closure every time clickHandler is called so each of the
// anonymous functions it returns are accessing different closures.
assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var clickHandler = function clickHandler(j) {
    return function(e){
      console.log(e.target);
      $('#clicked-btn').text('You clicked button #' + j);
    }
  }

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
     $(buttons[i]).on('click', clickHandler(i));
  }
}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

// After you setTimeout, the function is called by the window, so 'this' refers
// to window
//  To fix: capture our intended 'this' in _this and reference that in the timed outside
// function
// OR - since viking is just an object, use it explicitly in the setTimeout function
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
