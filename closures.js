
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

/* Explanation

   The on click method require a callback function. The problem
   was that our initial anonymous function was holding on to a
   reference to the iteration variable, which ended up being
   4 when the callback was finally executed.

   We needed to create a new closure around the value of i. So we
   created a named function which returns an anonymous function
   with the correct value of i imprisoned in a closure.

   Hooray.

 */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var message = function(arg){
    return function() {
      $('#clicked-btn').text('You clicked button #' + arg);
    }
  }

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???

  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value

    $(buttons[i]).on('click', message(i));


  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

The anonymous function passed to the browser's timing
API is not called on the vikin object, but instead on
the global 'window' object, thus this will be set to
the 'window' object, which has no mood property.

We need to store this is a variable (that) so that the
anonymous function forms a closure around that. Closures
are never formed around 'this.'

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
                          setTimeout( (function() {
                            that.mood = "Happy!";

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
