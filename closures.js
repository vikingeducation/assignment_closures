
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???

  var clicking = function(num){
    return function(){
      $('#clicked-btn').text('You clicked button #' + num);
    };
  };

  for (var i = 0; i < buttons.length; i++) {
    // somehow, i is always the same value
     $(buttons[i]).on('click', clicking(i));
  }
};



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

// When we create a function within another, it creates a
// new closure. So the mood defined does not refer to the
// viking closure.

assignments.two = function(){

  var viking = {  mood: undefined,
                  changeMood: function(){
                    viking.mood = "Happy!";
                    console.log("Cheered Up!");
                  },
                  cheerUp: function(){
                    //This part works!
                    //Otherwise, it would be undefined
                    console.log('sad');
                    viking.mood = "sad.";
                    $('#mood').text(viking.mood);
                    // ANS: So what goes wrong here? The function was defined here, creating another closure. Instead we moved it out of CheerUp to ensure the variables it references are the ones listed on the viking object / assignments.two function closure.
                    // setTimeout(this.changeMood, 500);
                    setTimeout(function(){
                      viking.mood = "Happy!";  // viking.mood reaches into the right closure and changes mood
                      console.log("Cheered Up!");
                    }, 500)

                    ;
                  }
           };

  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 5001);


};











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});