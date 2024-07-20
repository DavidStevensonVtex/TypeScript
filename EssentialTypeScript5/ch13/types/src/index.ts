// Listing 13.12 Using the indexed access operator in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
    return item[keyname];
}

type priceType = Product["price"];
type allTypes = Product[keyof Product];

let p = new Product("Running Shoes", 100);
console.log(getValue<Product, "name">(p, "name"));
console.log(getValue(p, "price"));

let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));

// Output
// Value: Running Shoes
// Value: 100
// Value: Bob Smith
// Value: Sales  