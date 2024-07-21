// Listing 14.7 The contents of the index.ts file in the src folder

import { City } from "./city.js";
import { Product } from "./product.js";

let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

console.log(city.getSummary());
console.log(product.getDetails());