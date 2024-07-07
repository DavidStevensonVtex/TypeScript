// Listing 8.17 Annotating the function result type in the index.ts file in the src folder

function calculateTax(amount: number,
    discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`Tax value: ${taxValue}`);

// Output
// Tax value: 120
