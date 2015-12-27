
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // $('#clicked-btn').text('You clicked button #' + index);

  // ------------------------------------
  // 1. Create a new scope with passed value of i
  // ------------------------------------
  var func = function(index) {
    // ------------------------------------
    // 2. Create a child scope that references 
    // the parent scope's value of i
    // ------------------------------------
    return function() {
      $('#clicked-btn').text('You clicked button #' + index);
    };
  };

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
    // ------------------------------------
    // 3. Set the event listener to the
    // returned scope with the FROZEN value of i
    // ------------------------------------
    $(buttons[i]).on('click', func(i));
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: (function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          // ------------------------------------
                          // 1. Capture the value of the current "this" in a variable
                          // in the parent scope of the target child scope
                          // ------------------------------------
                          var that = this;

                          //So what goes wrong here?
                          setTimeout(function() {
                            // ------------------------------------
                            // 2. Reference the captured value of "this" instead of
                            // "this" in the child scope, because
                            // in the child scope "this" points to
                            // Window because setTimeout is declared in the global scope.
                            // Where as "that" retains the value of the viking
                            // This can be seen in the console output.
                            // ------------------------------------
                            console.log(that);
                            console.log(this);
                            that.mood = "Happy!";

                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!");
                          }, 1000);
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