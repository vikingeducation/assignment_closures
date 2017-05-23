var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */
// Key ideas: 

// 1.  Variables in closures are references, not values. 
// 2.  `for` loops in JavaScript do not create their own scopes. The variable used as the index is hence attached to the parent scope.

// When `assignments.one` is run, all it does it attach a callback function to the action of clicking a button the page. 

// Up until the buttons on the page are actually clicked, the `i` in the callback function is just a reference to the `i` of the parent scope. Until then, it does not have a real value. 

// Since, at the end of the `for` loop, `i` is `4` and since `i` is part of the parent scope, the value of `i` that the callback function will retrieve will be `4`. So whichever button we click, we see "You clicked button #4".

assignments.one = function() {

  //There's a problem with this function
  var buttons = $('button');

  // No matter what I click, it always picks the same element
  // could it be CLOSURES???
  var element = function(num) {
    return function() {
      $('#clicked-btn').text('You clicked button #' + num);
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    // somehow, i is always the same value
    $(buttons[i]).on('click', element(i));
  }

}


/* ********************************************
ASSIGNMENT TWO: CHEER UP THE SAD VIKING VIA CLOSURE
********************************************* */

// Everytime we define a new function, we create a new scope.

// When we write

// 
// setTimeout( (function(){
//     this.mood = 'Happy!';
//     console.log('Cheered Up!');
//     }), 1000);
// 

// We create a new scope. Within that anonymous function, `this` no longer refers to our `viking` object, but to `window`, which is why it doesn't work.

assignments.two = function() {

  var viking = {
    mood: undefined,
    cheerUp: (function() {
      //This part works!
      //Otherwise, it would be undefined
      console.log('sad');
      this.mood = "sad.";
      $('#mood').text(this.mood);

      //So what goes wrong here?
      var updateMood = function(x) {
        x.mood = 'Happy';
        console.log('Cheered Up')
      }

      setTimeout(updateMood(this), 1000);
    })
  };


  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout(function() {
    $('#mood').text(viking.mood);
  }, 1001);


};





// Don't touch this. Just the setup

$(document).ready(function() {

  assignments.one();
  assignments.two();


});