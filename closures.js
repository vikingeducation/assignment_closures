
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');

  var changeButtonText = function(num) {
     $(buttons[num]).on('click', function() {
        $('#clicked-btn').text('You clicked button #' + num);
     });    
  };

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  for (var i = 0; i < buttons.length; i++) {
    changeButtonText(i);
    // somehow, i is always the same value
  }


}

// Solution: all child functions were sharing the same, most recently established i value due to sharing the same closure. Passing in i as num solves closure value. Each iteration of changeButtonText() references its own unique parent num value. 


/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

assignments.two = function(){

  var viking = {  mood: undefined,
                  cheerUp: ( function() {
                          //This part works!
                          //Otherwise, it would be undefined
                          console.log(this)
                          console.log('sad');
                          this.mood = "sad.";
                          $('#mood').text(this.mood);

                          //So what goes wrong here?
                          setTimeout( (function() {
                            viking.mood = "Happy!";
                            console.log(this)
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


// Solution: code inside setTimeout() was setting/getting properties on the window instead of the viking object.







// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});