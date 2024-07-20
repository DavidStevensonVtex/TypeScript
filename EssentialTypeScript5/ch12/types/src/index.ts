// Listing 12.8 Using a generic type in the index.ts file in the src folder

import { Person, Product } from "./dataTypes.js";

let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

// type dataType = Person | Product;

class DataCollection<T> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);

// console.log(`Name: ${peopleData.getNames().join(", ")}`);
let firstPerson = peopleData.getItem(0);
// if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
// }


// Output
// First Person: Bob Smith, London