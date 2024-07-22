// Listing 14.26 Using a class setter and getter feature in the index.ts file in the src folder

import { City } from "./city.js";
import { Product } from "./product.js";
import { isSerializeable } from "./classDecorator.js";

let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

console.log(city.getSummary());
console.log(product.getDetails());

if (isSerializeable(product)) {
    (product as any).serialize();
}

console.log(`Get Product tax: ${product.tax}`);
product.tax = 30;

// Output
// tax get returned 40
// Get Product tax: 40
// tax set to 30