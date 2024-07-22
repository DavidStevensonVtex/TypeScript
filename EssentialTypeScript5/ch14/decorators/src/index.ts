// Listing 14.20 Using a type guard in the index.ts file in the src folder

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

// Output
// getSummary started
// getSummary ended 5.49 ms
// Name: London, Population: 8982000
// getDetails started
// getDetails ended 0.25 ms
// Name: Kayak, Price: $275
// Product: {"name":"Kayak","price":275}