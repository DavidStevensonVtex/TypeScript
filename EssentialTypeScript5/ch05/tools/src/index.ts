// Listing 5.27 Adding a file extension in the index.ts file in the src folder

import { sum } from "./calc.js";

let printMessage = (msg: string): void =>
    console.log(`Message: ${msg}`);

let message = ("Hello, TypeScript");
printMessage(message);

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);

// Output
// Message: Hello, TypeScript
// Total: 600