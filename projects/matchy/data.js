/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Lion'
animal['name'] = 'jack'
animal['noises'] = []
console.log(animal)
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'roaaar';
noises.push('puurr');
noises.unshift('meow');
noises[noises.length] = ('yawnnn')

console.log(noises.length)
console.log(noises[noises.length - 1])
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('claw');

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //key
 * 2. What are the different ways of accessing elements on arrays?
 * //dot and bracket
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
 var animals = []
// var animal ={ species: 'Lion', name: 'Jack', noises: ['roar', 'growl'] };
 animals.push(animal); 
// console.log(animal) 
 var duck = { species: 'duck', name: 'Leslie', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
 animals.push(duck);
 var kitty = { species: 'kitty', name: 'blue', noises: ['sctrach', 'attack']};
 animals.push(kitty)
 var bird = { species: 'bird', name: 'turbo', noises: ['peak', 'call']};
animals.push(bird)
 console.log(animals)
console.log.length
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//object called friends to lkst
var friends = []
function getRandom(array) {
  var vibe = Math.floor(Math.random() * array.length);
    return vibe;
}
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[0].friends = friends
console.log(animals)


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}