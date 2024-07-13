// Listing 10.1 Replacing the contents of the index.ts file in the src folder

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };

let products = [hat, gloves];

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));

// Output
// Hat: 100
// Gloves: 75