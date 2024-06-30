// Listing 3.13 Using the nullish coalescing operator in the index.js file in the primer folder

let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.log(`Boots price: ${bootsPrice}`);

let taxRate;        // no tax rate has been defined
console.log(`Tax Rate: ${taxRate ?? 10}%`);
taxRate = 0;        // zero-rated for tax
console.log(`Tax Rate: ${taxRate ?? 10}%`);

// Output
// Hat price: 100
// Boots price: 100
// Tax Rate: 10%
// Tax Rate: 0%