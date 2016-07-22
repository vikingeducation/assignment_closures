
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???

  // I remember an example about this saying that because the i is always going to refer to the i in this for loop, and the i will be the number before the buttons.length.
  // I think the rule is, every time a new function is called, a new closure is created.
  // So if we set each listener with a different function, that will reference separated closures where the i is different on each.

  var clickListener = function( array, index ){
    $(array[index]).on( 'click', function(){$('#clicked-btn').text('You clicked button #' + index)} )
  };

  for (var i = 0; i < buttons.length; i++) {
    clickListener( buttons, i );
  };
};



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  // The facts
                  // cheerUp is the results of the function inside running...
                  // so if we took away the brackets, nothing would run
                  cheerUp: function() {
                             //This part works!
                             //Otherwise, it would be undefined
                             console.log('sad');
                             this.mood = "sad.";
                             $('#mood').text(this.mood);

                             //So what goes wrong here?
                             // I think the problem is that setTimeout isn't assigned to anything so it's just being called by the window...
                             // What we need is viking to call the setTimeout...
                             (function(){ setTimeout( viking.changeMood(), 1000) })();
                           },

                  changeMood: function(){
                    this.mood = "Happy!";

                    //THIS even runs correctly!
                    //What is UP with this? :(
                    console.log("Cheered Up!")
                  },
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