// Listing 13.10 Using explicit type arguments in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");

// Output
// Value: Running Shoes
// Value: 100
// Value: Bob Smith
// Value: Sales  