// Listing 8.1 The contents of the index.ts file in the src folder.

function calculateTax(amount) {
    return amount * 1.2;
}

let taxValue = calculateTax(100);
console.log(`Total Amount: ${taxValue}`);

// Output
// src / index.ts(3, 23): error TS7006: Parameter 'amount' implicitly has an 'any' type.

// 11: 40: 59 AM - Found 1 error.Watching for file changes.