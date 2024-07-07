// Listing 8.18 Defining a void function in the index.ts file in the src folder

function calculateTax(amount: number,
    discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

writeValue("Tax value", calculateTax(100, 0));

// Output
// Tax value: 120
