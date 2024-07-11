// Listing 9.17 Using an enum number value in the index.ts file in the src folder

function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella };

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val} String value: ${Product[val]}`);
})
// Output
// Number value: 0 String value: Hat
// Number value: 1 String value: Gloves
// Number value: 2 String value: Umbrella

// index.d.ts:
// declare enum Product {
//     Hat = 0,
//     Gloves = 1,
//     Umbrella = 2
// }

// index.js:
// var Product;
// (function (Product) {
//     Product[Product["Hat"] = 0] = "Hat";
//     Product[Product["Gloves"] = 1] = "Gloves";
//     Product[Product["Umbrella"] = 2] = "Umbrella";
// })(Product || (Product = {}));
