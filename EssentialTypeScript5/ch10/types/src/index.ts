// Listing 10.7 Using an optional property in the index.ts file in the src folder

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true }

let products: { name: string, price: number, waterproof?: boolean }[]
    = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} ` +
    `Waterproof: ${prod.waterproof}`));

// Output
// Hat: 100 Waterproof: undefined
// Gloves: 75 Waterproof: undefined
// Umbrella: 30 Waterproof: true 
