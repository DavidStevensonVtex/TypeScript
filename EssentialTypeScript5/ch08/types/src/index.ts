// Listing 8.23 Narrowing types directly in the index.ts file in the src folder

function checkNumber(val: any): asserts val is number {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}

function calculateTax(amount: number | null): number {
    checkNumber(amount);
    return amount * 1.2;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxAmount: number = calculateTax(100);
writeValue("Tax value", taxAmount);

// Output
// Tax value: 120
