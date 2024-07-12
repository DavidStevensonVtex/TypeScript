// Listing 9.19 Using a constant enum value in the index.ts file in the src folder

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves = 20, Umbrella };

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);

// Output
// Value: 0, Name: Hat

// index.d.ts
// declare enum Product {
//     Hat = 0,
//     Gloves = 20,
//     Umbrella = 21
// }

// index.js
// var Product;
// (function (Product) {
//     Product[Product["Hat"] = 0] = "Hat";
//     Product[Product["Gloves"] = 20] = "Gloves";
//     Product[Product["Umbrella"] = 21] = "Umbrella";
// })(Product || (Product = {}));
// ;