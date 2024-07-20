// Listing 13.23 Using a conditional type in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;

let mismatchCheck: resultType<false> = "String Value";

// Output
// src/index.ts(10,5): error TS2322: Type 'string' is not assignable to type 'number'.

// 5:39:25 PM - Found 1 error. Watching for file changes.