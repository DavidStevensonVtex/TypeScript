// Listing 7.26 Using a type guard in the index.ts file in the src folder

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}

let taxValue = calculateTax(100, false);

if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
} else {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}

// Output
// Number Value: 120.00