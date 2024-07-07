// Listing 8.8 Using a default parameter value in the index.ts file in the src folder

function calculateTax(amount, discount = 0) {
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);

// Output
// 2 args: 120
// 1 arg: 120