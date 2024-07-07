// Listing 8.21 Using an assert function in the index.ts file in the src folder

function check(expression: boolean) {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function calculateTax(amount: number | null): number {
    check(typeof amount == "number");
    return amount * 1.2;
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxAmount: number = calculateTax(100);
writeValue("Tax value", taxAmount);

// Output
// src/index.ts(11,12): error TS18047: 'amount' is possibly 'null'.

// 1:15:52 PM - Found 1 error. Watching for file changes.
