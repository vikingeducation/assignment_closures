
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

// the issue here is the closure is passing the final value of i
// as the for loop has fully executed
// by refactoring into a callable function, our button is passed the
// proper parameters in the closure


assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var buttonSelection =  function(number){
      $(buttons[number]).on('click', function() {
      $('#clicked-btn').text('You clicked button #' + number);
     });
  }

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {

    buttonSelection(i)
    
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

  // the issue here is that when inside set interval "this"
  // is window, we can work around this by just not using this
  // we did this via a setter function

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
                            viking.setMood("Happy!");
                            console.log(this)
                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!")
                          }), 1000);
                      }),
                  setMood: function(mood){
                    viking.mood = mood
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











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});