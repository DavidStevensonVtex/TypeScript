// Listing 15.15 Using the wrong type in the index.ts file in the src folder

import { SportsProduct, SPORT } from "./product.js";
import { Cart } from "./cart.js";
import { sizeFormatter, costFormatter } from "./formatters.js";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

// Output
// The Cart has 4 items
// file:///D:/drs/TypeScript/GitHub/TypeScript/EssentialTypeScript5/ch15/usingjs/dist/formatters.js:7
//     writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
//                                              ^

// TypeError: cost.toFixed is not a function
//     at costFormatter (file:///D:/drs/TypeScript/GitHub/TypeScript/EssentialTypeScript5/ch15/usingjs/dist/formatters.js:7:46)
//     at file:///D:/drs/TypeScript/GitHub/TypeScript/EssentialTypeScript5/ch15/usingjs/dist/index.js:13:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)