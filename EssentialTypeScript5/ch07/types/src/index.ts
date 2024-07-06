// Listing 7.28 Using the never type in the index.ts file in the src folder

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}

let taxValue = calculateTax(100, false);

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    case "never":
        let value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}

// Output
// src/index.ts(17,10): error TS2678: Type '"never"' is not comparable to type '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object"     th | "function"'.

// 2:14:43 PM - Found 1 error. Watching for file changes.
