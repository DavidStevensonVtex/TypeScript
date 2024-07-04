// Listing 4.29 Importing a named feature in the index.js file in the primer folder

import { calculateTax } from "./tax.js" ;

class Product {
    constructor (name, price) {
        this.id = Symbol();
        this.name = name ;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calculateTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);

// Output
// Name: Hat, Taxed Price: 120