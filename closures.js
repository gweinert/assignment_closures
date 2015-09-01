
var assignments = {};


/* ********************************************
ASSIGNMENT ONE: FIX THESE BUTTON LISTENERS VIA CLOSURE
********************************************* */

assignments.one = function(){

  //There's a problem with this function
  var buttons = $('button');
  var arr = $.makeArray( buttons);
  // No matter what I click, it always picks the same element
  // could it be CLOSURES???


//First way
  // buttons.each(function(index,element){
  //   $(element).on('click', function() {
  //       $('#clicked-btn').text('You clicked button #' + index);})
  // });

  for (var i = 0; i < buttons.length; i++) {
  //Third way  
     //  function (i){
     //   $(buttons[i]).on('click',  function() {
     //    $('#clicked-btn').text('You clicked button #' + i);
     // });
    //}
    message(i);
    };

//Second way
  function message(i){
    // somehow, i is always the same value
     $(buttons[i]).on('click', function() {
        $('#clicked-btn').text('You clicked button #' + i);
     });
  }

//Initial code:
// for (var i = 0; i < buttons.length; i++) {

//     // somehow, i is always the same value
//      $(buttons[i]).on('click', function() {
//         $('#clicked-btn').text('You clicked button #' + i);
//      });
//   }
//Explanation:
//For loop holds one closure that contains i, in this scope the inner function runs and uses the same i which is overwritten in each loop. And for the last loop i = 4. That is why we always see "You clicked 4". To fix this we need inside the loop any function declared or anonymous to make it forse loop to create each time different closure with different i for each inner function.

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
                          console.log("first this: "+this);
                          $('#mood').text(this.mood);

                          //So what goes wrong here?

                          //Because setTimeout function is inside cheerUp function, 'this' is no longer a viking object. 'This' has become the window object because setTimeout runs in the Global object window. 

                          //Solution: Set 'this' to a variable that will be in the closure of the parent function. The callback function has access to this parent's closure and we can use var that points to 'this' (viking object)
                          var self = this;
                          setTimeout( function callback() {

                            self.mood = "Happy!";
                            console.log("second this: "+self);

                            //THIS even runs correctly!
                            //What is UP with this? :(
                            console.log("Cheered Up!");
                          }, 1000);
                      })
           };



  viking.cheerUp();

  //waits an extra millisecond to make sure
  //that the other setTimeout has run.
  //The problem is NOT here
  setTimeout( function() {
    $('#mood').text(viking.mood);
    console.log(viking.mood);
  }, 1001);


};











// Don't touch this. Just the setup

$(document).ready(function(){

  assignments.one();
  assignments.two();


});