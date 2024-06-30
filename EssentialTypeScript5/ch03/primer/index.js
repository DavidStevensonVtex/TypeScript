// Listing 3.8 Getting a value type in the index.js file in the primer folder

let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice ;
console.log(`Total Price: ${totalPrice}`);

let myVariable = "Adam" ;
console.log(`Type ${typeof myVariable}`);

// Output
// Hat price: 100
// Boots price: 100
// Prices are the same
// Total Price: 100100
// Type string