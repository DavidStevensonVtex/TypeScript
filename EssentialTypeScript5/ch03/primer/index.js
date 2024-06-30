// Listing 3.24 Ignoring elements when destructuring an array in the index.js file in the primer folder

let names = [ "Hat", "Boots", "Gloves" ];

let [, , three] = names ;
console.log(`Three: ${three}`);

// Output
// Three: Gloves