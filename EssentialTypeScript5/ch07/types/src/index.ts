// Listing 7.22 Declaring union types explicitly in the index.ts file in the src folder

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}

let taxNumber: string | number = calculateTax(100, false);
let taxString: string | number = calculateTax(100, true);

console.log(`Number value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);

// Output
// src/index.ts(11,40): error TS2339: Property 'toFixed' does not exist on type 'string | number'.
//   Property 'toFixed' does not exist on type 'string'.
// src/index.ts(12,40): error TS2339: Property 'charAt' does not exist on type 'string | number'.
//   Property 'charAt' does not exist on type 'number'.

// 11:22:36 AM - Found 2 errors. Watching for file changes.