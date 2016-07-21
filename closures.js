
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

/* The i variable point to the same place in the closure for each function, 4, 
   the value of i after the for loop finish 
*/

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var clickFunc = function(num) {
      return function() {
        $('#clicked-btn').text('You clicked button #' + num);
      }
     }
  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {

    // somehow, i is always the same value
     $(buttons[i]).on( 'click', clickFunc(i) );
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

/*  the function call in setTimeout loose the 'viking object' referenced by 'this',
    so in this.mood = "Happy!", this is the global object.
*/

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          //So what goes wrong here?
                          var viking = this;

                          var happy = function(viking) {
                              viking.mood = "Happy!";

                              //THIS even runs correctly!
                              //What is UP with this? :(
                              console.log("Cheered Up!")
                            }

                            setTimeout( happy(viking), 1000);

                            /* BEFORE 

                            setTimeout( (function() {
                              this.mood = "Happy!";

                              //THIS even runs correctly!
                              //What is UP with this? :(
                              console.log("Cheered Up!")
                            }), 1000);

                            */
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