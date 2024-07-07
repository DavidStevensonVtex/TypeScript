// Listing 8.21 Using an assert function in the index.ts file in the src folder

function check(expression: boolean) {
    if (!expression) {
        throw new Error("Expression is false");
    }
}

function calculateTax(amount: number | null): number | null {
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
// src/index.ts(18,5): error TS2322: Type 'number | null' is not assignable to type 'number'.
//   Type 'null' is not assignable to type 'number'.

// 1:12:26 PM - Found 2 errors. Watching for file changes.
