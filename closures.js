
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */
// this function is intended to be able to make a button listener
// that creats slightly different functionality for each button in
// a list based on its position. The previsous version ran a loop
// without capturing the scope of the iteration in a closure. This
// had the unintended affect of making all buttons in the list have
// the behavior intended for the last button. This can be corrected
// passing a closure as the second argument of the 'on' method within
// the for loop
assignments.one = function(){
  var buttons = $('button');
  var listeners = [];

  var buttonFunc = function(num) {
    return function() {
      $('#clicked-btn').text('You clicked button #' + num);
    };
  };

  for (var i = 0; i < buttons.length; i++) {
    listeners.push($(buttons[i]).on('click', buttonFunc(i)));
  }
  return listeners;
};



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */
// setTimeout breaks the scope becuase it is called by the window.
// Creating a closure that sets 'mood' in the right scope and passing
// it into the timeout fixes this.


assignments.two = function(){

  var viking = {
    mood: undefined,
    makeHappy: function(){
      return this.mood = "Happy!";
    },
    cheerUp: ( function() {
      //This part works!
      //Otherwise, it would be undefined
      console.log('sad');
      this.mood = "sad.";
      $('#mood').text(this.mood);

      //So what goes wrong here?
      setTimeout( (function() {
        viking.makeHappy();

        //THIS even runs correctly!
        //What is UP with this? :(
        console.log("Cheered Up!");
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
