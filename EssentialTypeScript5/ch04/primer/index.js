// Listing 4.27 Using a module in the index.js file in the primer folder

import calcTax from "./tax.js" ;

class Product {
    constructor (name, price) {
        this.id = Symbol();
        this.name = name ;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calcTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);

// Output
// Name: Hat, Taxed Price: 120