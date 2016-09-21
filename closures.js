
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var func = function(num) {
    $(buttons[num]).on('click', function() {
     $('#clicked-btn').text('You clicked button #' + num);
  })};


  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {
    func(i)

    // somehow, i is always the same value
    //  $(buttons[i]).on('click', function() {
    //     $('#clicked-btn').text('You clicked button #' + $(this).text());
    //  });

  }


}



/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp:  (function() {

                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          setTimeout( (function() {
                            viking.mood = "Happy!";
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
