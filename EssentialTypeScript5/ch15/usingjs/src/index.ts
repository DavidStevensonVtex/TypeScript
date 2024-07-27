// Listing 15.20 Using a function in the index.ts file in the src folder

import { SportsProduct, SPORT } from "./product.js";
import { Cart } from "./cart.js";
import { sizeFormatter, costFormatter, writeMessage } from "./formatters.js";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);
writeMessage("Test message");

// Output
// src/index.ts(5,40): error TS2305: Module '"./formatters.js"' has no exported member 'writeMessage'.

// 6:16:40 PM - Found 1 error. Watching for file changes.

// The compiler relies entirely on the type declaration file (formatters.d.ts) to describe
// the contents of the formatters module. A declaration statement for writeMessage in
// formatters.d.ts is required to resolve the error message.