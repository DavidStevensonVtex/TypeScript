// Listing 15.36 Updaing a dependency in the index.ts file in the src folder

import { SportsProduct, SPORT } from "./product.js";
import { Cart } from "./cart.js";
import { sizeFormatter, costFormatter, writeMessage } from "./tsformatters.js";
import debug from "debug";
import chalk from "chalk";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

let db = debug("Example App");
db.enabled = true;
db("Message: %s", "Test message");

console.log(chalk.greenBright("Formatted message"));
// console.log(chalk.notAColor("Formatted message"));

// Output
// The Cart has 4 items
// The Cart costs $341.3
//   Example App Message: Test message +0ms
// Formatted message