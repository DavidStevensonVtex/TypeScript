// Listing 5.20 Using modern features in the index.ts file in the src folder

let printMessage = (msg: string): void =>
    console.log(`Message: ${msg}`);

let message = ("Hello, TypeScript");
printMessage(message);

// Output
// Message: Hello, TypeScript