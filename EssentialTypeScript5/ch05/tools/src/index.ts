// Listing 5.13 Commenting out a statement causing an error in the index.ts file in the src folder

function printMessage(msg: string): void {
    console.log(`Message: ${msg}`);
}

printMessage("Hello, TypeScript");
// printMessage(100);
