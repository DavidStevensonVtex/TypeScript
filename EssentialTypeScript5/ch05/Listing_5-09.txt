// Listing 5.9 Creating a type mismatch in the index.ts file in the src folder
function printMessage(msg: string): void {
    console.log(`Message: ${msg}`);
}

printMessage("Hello, TypeScript");
printMessage(100);

// Output
// src/index.ts:7:14 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// 7 printMessage(100);
~~~