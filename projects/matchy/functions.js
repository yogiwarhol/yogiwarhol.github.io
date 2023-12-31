/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for (var i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
        return animals[i];
      }
    }
    return null;
  }
    

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
for (var i = 0; i <animals.length; i++) {
    if (animals[i].name) {
        animals[i] = replacement
        return;
       } 
}
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) { 
  var remoAni = -1
  for (var i =0; i < animals.length; i++) {
    if(animals[i].name === name) {
      remoAni = i;
      break;
    }
  }
if (remoAni !== -1) {
  animals.splice(remoAni, 1);  
  }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
  
  if (!animal.hasOwnProperty('name') || animal.name.length === 0) {
    console.log('Animal must have a valid name.');
    return;
  }

  
  if (!animal.hasOwnProperty('species') || animal.species.length === 0) {
    console.log('Animal must have a valid species.');
    return;
  }

  
  var isNameUnique = animals.every(function (existingAnimal) {
    return existingAnimal.name !== animal.name;
  });

  if (!isNameUnique) {
    console.log('Animal name must be unique.');
    return;
  }

  // If all conditions pass, add the new animal to the 'animals' array
  animals.push(animal);
}






/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
