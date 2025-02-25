// Listing 14.43 Configuring the decorator in the product.ts file in the src folder

import { time } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";
import { double } from "./fieldDecorator.js";
import { log } from "./accessorDecorator.js";
import { autolog } from "./autoAccessorDecorator.js";

@serialize
export class Product {

    constructor(public name: string, public price: number) { }

    @time({
        // replacement: () => "Hello, Decorator"
        time: true
    })
    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.getPrice()}`;
    }

    @time({
        label: "Product.getPrice",
        time: true
    })
    getPrice(): number {
        return this.price * (1 + this.tax / 100);
    }

    @autolog
    accessor tax: number = 20;
}

// Output
// Auto-accesor initialized to 20
// Name: London, Population: 8982000
// Hello, Decorator
// Product: {"name":"Kayak","price":275}
// Auto-accessor tax get returned 20
// Get Product tax: 20
// Auto-accessor tax set to 30