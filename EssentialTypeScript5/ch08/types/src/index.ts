// Listing 8.4 Redefining a function in the index.ts file in the src folder

function calculateTax(amount) {
    return amount * 1.2;
}

function calculateTax(amount, discount) {
    return calculateTax(amount) - discount;
}


let taxValue = calculateTax(100);
console.log(`Total Amount: ${taxValue}`);

// Output
// src/index.ts(3,10): error TS2393: Duplicate function implementation.
// src/index.ts(7,10): error TS2393: Duplicate function implementation.

// 11:48:41 AM - Found 2 errors. Watching for file changes.