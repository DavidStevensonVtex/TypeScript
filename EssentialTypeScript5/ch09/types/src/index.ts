// Listing 9.18 Using enum and number values in the index.ts file in the src folder

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella };

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);

// Output
// Value: 0, Name: Hat