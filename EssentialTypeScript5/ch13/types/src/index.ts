// Listing 13.32 Using the built-in conditional types in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

function makeObject<T extends new (...args: any) => any>
    (constructor: T, ...args: ConstructorParameters<T>): InstanceType<T> {
    return new constructor(...args as any[]);
}

let prod: Product = makeObject(Product, "Kayak", 275);
let city: City = makeObject(City, "London", 8136000);

[prod, city].forEach(item => console.log(`Name: ${item.name}`));

// Output
// Name: Kayak
// Name: London