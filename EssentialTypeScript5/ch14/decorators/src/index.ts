// Listing 14.18 Invoking an additional method in the index.ts file in the src folder

import { City } from "./city.js";
import { Product } from "./product.js";

let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

console.log(city.getSummary());
console.log(product.getDetails());

(product as any).serialize();

// Output
// getSummary started
// getSummary ended 5.49 ms
// Name: London, Population: 8982000
// getDetails started
// getDetails ended 0.25 ms
// Name: Kayak, Price: $275
// Product: {"name":"Kayak","price":275}