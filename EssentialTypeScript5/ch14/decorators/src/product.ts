// Listing 14.5 The contents of the product.ts file in the src folder

export class Product {
    constructor(public name: string, public price: number) { }

    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.price}`;
    }
}