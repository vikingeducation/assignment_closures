
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  var buttons = $('button');

  // Pulled the code from inside the loop into a separate function with one argument, num, that will be used for "i"
  var buttonClick = function(num){
    $(buttons[num]).on('click', function() {
        $('#clicked-btn').text('You clicked button #' + num);
    });
  };

  for (var i = 0; i < buttons.length; i++) {
    // Now the reference is correct for each button. Previously, they were all pointing to the last value of "i".
    buttonClick(i);
  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {
    mood: undefined,
    changedMood: function(self){
      setTimeout( (function() {
        self.mood = "Happy!";

        //THIS even runs correctly!
        //What is UP with this? :(
        console.log("Cheered Up!")
      }), 1000);
    },
    cheerUp: ( function() {
      //This part works!
      //Otherwise, it would be undefined
      console.log('sad');
      this.mood = "sad.";
      $('#mood').text(this.mood);

      //So what goes wrong here?
      // setTimeout is performed on the window object which has a different scope ("this" points to window instead of viking).
      this.changedMood(this);

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