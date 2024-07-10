// Listing 9.5 Performing operations on typed arrays in the index.ts file in the src folder

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices: number[] = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price));
});


// Output
// Price for Hat: $120.00
// Price for Gloves: $90.00
// Price for Umbrella: $50.40
