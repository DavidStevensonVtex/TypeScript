// Listing 7.17 Changing the function result in the index.ts file in the src folder

function calculateTax(amount: any): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

// Output
// Price: 100
// Full amount in tax: $120.00
// Half share: NaN  (incorrect)