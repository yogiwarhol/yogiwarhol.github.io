// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    function fizzBuzz() {
        for (let i = 1; i <= 100; i++) {
          // Check if the number is a multiple of both three and five
          if (i % 3 === 0 && i % 5 === 0) {
            console.log("izzBuzz");
          }
          // Check if the number is a multiple of three
          else if (i % 3 === 0) {
            console.log("Fizz");
          }
          // Check if the number is a multiple of five
          else if (i % 5 === 0) {
            console.log("Buzz");
          }
          // If none of the above conditions are met, print the number itself
          else {
            console.log(i);
          }
        }
      }
      
      // Call the function to print the numbers according to the Fizz Buzz rules
      fizzBuzz();
      
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}