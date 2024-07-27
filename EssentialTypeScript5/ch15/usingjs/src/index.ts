// Listing 15.10 Using JavaScript functions in the index.ts file in the src folder

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
costFormatter("Cart", cart.totalPrice);

// Output
// file:///D:/drs/TypeScript/GitHub/TypeScript/EssentialTypeScript5/ch15/usingjs/dist/index.js:4
// import { sizeFormatter, costFormatter } from "./formatters.js";
//                         ^^^^^^^^^^^^^
// SyntaxError: The requested module './formatters.js' does not provide an export named 'costFormatter'
//     at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
//     at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)