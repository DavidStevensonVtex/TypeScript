// Listing 14.9 Decorating a method in the product.ts file in the src folder

import { time } from "./methodDecorator.js";

export class Product {
    constructor(public name: string, public price: number) { }

    @time
    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}`;
    }
}

// src/product.ts(3,22): error TS2307: Cannot find module './methodDecorator.js' or its corresponding type declarations.

// 3:19:38 PM - Found 1 error. Watching for file changes.