
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  var buttons = $('button');

  for (var i = 0; i < buttons.length; i++) {
    var iNewI = i;
    (function(differentPointer){
      $(buttons[i]).on('click', function() {
        $('#clicked-btn').text('You clicked button #' +  differentPointer);
      });
    })(iNewI);
  }
}



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
                          var that = this;
                          $('#mood').text(this.mood);

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
  setTimeout( function() {
    $('#mood').text(viking.mood);
  }, 1001);
};

// Don't touch this. Just the setup

$(document).ready(function(){
  //touch
  assignments.one();
  assignments.two();


});