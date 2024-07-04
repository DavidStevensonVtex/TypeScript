// Listing 4.32 The contents of the utils.js file in the primer folder

import { calculateTax } from "./tax.js";

export function printDetails(product) {
    let taxedPrice = calculateTax(product.price);
    console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
}

export function applyDiscount(product, discount = 5) {
    product.price = product.price - discount ;
}