// Listing 12.11 Using a shape type in the index.ts file in the src folder

import { City, Person, Product } from "./dataTypes.js";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

class DataCollection<T extends { name: string }> {
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

let cityData = new DataCollection<City>(cities);
console.log(`City Names: ${cityData.getNames().join(", ")}`);

// Output
// First Person: Bob Smith, London
// Person Names: Bob Smith, Dora Peters
// First Product: Running Shoes, 100
// Product Names: Running Shoes, Hat
// City Names: London, Paris 