
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button'); // NO CHANGES HERE

  var current_b;

  //DECLARED FN OUTSIDE FOR LOOP TO
  //CREATE NEW CLOSURE FOR EACH LISTENER

  var addButtonListener = function(button, i){
    $(button).on('click', function() {
    $('#clicked-btn').text('You clicked button #' + i);
   });};


  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {
      current_b = buttons[i];
    // somehow, i is always the same value
    // BECAUSE ONLY ONE i VAR IN THIS CLOSURE(one fn)

    //PASSED IN VARIABLES TO FUNCTION TO KEEP THESE VALUES
      addButtonListener(current_b, i);
  }
};




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
                          //setTimeout changes `this` to Window
                          setTimeout( (function() {
                            // this.mood = "Happy!";
                            //  THIS IS WINDOW OBJ
                            viking.mood = "Happy!";

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