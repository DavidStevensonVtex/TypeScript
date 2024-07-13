// Listing 9.28 Defining a second lietral value type in the index.ts file in the src folder

let restrictedValue: 1 | 2 | 3 = 1;

let secondValue: 1 | 10 | 100 = 1;

restrictedValue = secondValue;
secondValue = 100;
restrictedValue = secondValue;

// Output
// src/index.ts(9,1): error TS2322: Type '100' is not assignable to type '1 | 2 | 3'.

// 8:07:55 PM - Found 1 error. Watching for file changes.