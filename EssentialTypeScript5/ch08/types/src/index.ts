// Listing 8.5 Consolidating functions in the index.ts file in the src folder

function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);
console.log(`Total Amount: ${taxValue}`);

// Output
// Total Amount: 120