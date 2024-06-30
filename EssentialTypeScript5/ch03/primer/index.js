// Listing 3.25 Assigning remaining elements in the index.js file in the primer folder

let names = [ "Hat", "Boots", "Gloves" ];

let [, , three] = names ;
console.log(`Three: ${three}`);

let prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a-b);
console.log(`highest: ${highest}`);
highest.forEach(price => console.log(`High price: ${price}`));

// Output
// Three: Gloves
// highest: 100,120
// High price: 100
// High price: 120