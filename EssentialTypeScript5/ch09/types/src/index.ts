// Listing 9.25 Looking up an enum name in the index.ts file in the src folder

const enum Product { Hat, Gloves, Umbrella }
let productValue = Product.Hat;
let productName = Product[Product.Hat];

// Output
// src/index.ts(5,27): error TS2476: A const enum member can only be accessed using a string literal.

// 7:59:25 PM - Found 1 error. Watching for file changes.