// Listing 3.6 Adding statements in the index.js file in the primer folder

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

// Output
// Hat price: 100
// Boots price: 100
// Prices are the same
// Total Price: 100100