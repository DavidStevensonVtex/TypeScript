// Listing 14.9 Decorating a method in the product.ts file in the src folder

import { time } from "./methodDecorator.js";

export class Product {
    constructor(public name: string, public price: number) { }

    @time
    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}`;
    }
}