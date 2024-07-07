// Listing 8.20 Overloading function types in the index.ts file in the src folder

function calculateTax(amount: number): number;
function calculateTax(amount: null): null;
function calculateTax(amount: number | null): number | null {
    if (amount != null) {
        return amount * 1.2;
    }
    return null;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxAmount: number = calculateTax(100);
// if (typeof taxAmount === "number") {
writeValue("Tax value", taxAmount);
// }

// Output
// Tax value: 120
