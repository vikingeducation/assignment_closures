
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
    (function(i) {$(buttons[i]).on('click', function() {
      $('#clicked-btn').text('You clicked button #' + i);
    });})(i);
  }

};

//The handler function does not get called until you click on the button,
//which is after the loop has already concluded, thus i is equal to 4

//So we just wrapped the listener declaration in an anonymous function and
//explicitly passed i as a parameter.



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
                    (function(that) {setTimeout( (function() {
                      that.mood = "Happy!";

                      //THIS even runs correctly!
                      //What is UP with this? :(
                      console.log("Cheered Up!");
                    }), 1000);})(this);
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

//setTimeout was calling its anonymous function in the context of the window,
//thus, this was the window, instead of the viking.

//So, at the declaration of the timeout, we passed in viking in the form of
// 'this' to another anonymous function, creating a new closure.











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});
