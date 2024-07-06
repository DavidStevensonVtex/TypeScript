// Listing 7.15 Using the any type in the index.ts file in the src folder

function calculateTax(amount: any): any {
    return (amount * 1.2).toFixed(2);
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

// Output
// Full amount in tax: 120.00
// Half share: 60