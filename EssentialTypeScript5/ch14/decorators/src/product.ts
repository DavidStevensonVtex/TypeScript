// Listing 14.17 Applying a class decorator in the product.ts file in the src folder

import { time } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";

@serialize
export class Product {
    constructor(public name: string, public price: number) { }

    @time
    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}`;
    }

    @time
    getPrice(): number {
        return this.price;
    }
}