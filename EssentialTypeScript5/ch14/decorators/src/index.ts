// Listing 14.46 Writing data in the index.ts file in the src folder

import { City } from "./city.js";
import { Product } from "./product.js";
import { isSerializeable } from "./classDecorator.js";
import { writeTimes } from "./methodDecorator.js";

// let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

// console.log(city.getSummary());
console.log(product.getDetails());
console.log(`Price: ${product.getPrice()}`);

writeTimes();

// Output
// Auto-accessor initialized to 20
// Auto-accessor tax get returned 20
// Name: Kayak, Price: $330
// Auto-accessor tax get returned 20
// Price: 330
// Product.getPrice, count: 2, time: 0.27 ms
// getDetails, count: 1, time: 0.36 ms 