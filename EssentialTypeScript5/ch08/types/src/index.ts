// Listing 8.14 Allowing a null parameter value in the index.ts file in the src folder

function calculateTax(amount: number | null,
    discount: number = 0, ...extraFees: number[]) {
    if (amount != null) {
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
}

let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);

// Output
// Tax value: undefined
