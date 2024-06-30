// Listing 3.29 Using optional chaining in the index.js file in the primer folder

let hat = { name: "Hat", price: 100 } ;
let boots = { name: "Boots", price: "100" } ;
let gloves = { productName: "Gloves", price: "40" };

gloves.name = gloves.productName ;
delete gloves.productName ;
gloves.price = 20 ;

let propertyCheck = hat.price ?? 0;
let objectAndPropertyCheck = hat?.price ?? 0 ;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

// Output
// Checks: 100, 100