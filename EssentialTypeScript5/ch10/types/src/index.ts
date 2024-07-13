// Listing 10.6 Adding properties in the index.ts file in the src folder

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true }

let products: { name: string, price: number }[] = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));

// Output
// Hat: 100
// Gloves: 75
// Umbrella: 30
