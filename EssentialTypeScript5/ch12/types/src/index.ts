// Listing 12.10 Restricting generic types in the index.ts file in the src folder

import { Person, Product } from "./dataTypes.js";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class DataCollection<T extends (Person | Product)> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData.getNames().join(", ")}`);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData.getNames().join(", ")}`);

// Output
// First Person: Bob Smith, London
// Person Names: Bob Smith, Dora Peters
// First Product: Running Shoes, 100
// Product Names: Running Shoes, Hat   