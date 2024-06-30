// Listing 3.21 Defining and using an array in the index.js file in the primer folder

let names = [ "Hat", "Boots", "Gloves" ];
let prices = [] ;

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => numbers.reduce((total, val) => 
         total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Output
// First Item: Hat: 100
// Total: 250.25 number