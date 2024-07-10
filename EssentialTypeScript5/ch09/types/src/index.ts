// Listing 9.6 Using inferred types in the index.ts file in the src folder

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});


// Output
// Price for Hat: $120.00
// Price for Gloves: $90.00
// Price for Umbrella: $50.40

// index.d.ts:
// declare function calculateTax(amount: number): number;
// declare function writePrice(product: string, price: number): void;
// declare let prices: number[];
// declare let names: string[];
