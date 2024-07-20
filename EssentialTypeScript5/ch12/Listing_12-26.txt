// Listing 12.26 Defining an abstract class in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

abstract class ArrayCollection<T extends shapeType>
    implements Collection<T> {
    protected items: T[] = [];

    add(...newItems): void {
        this.items.push(...newItems);
    }

    abstract get(searchTerm: string): T;

    get count(): number {
        return this.items.length;
    }
}

class ProductCollection extends ArrayCollection<Product> {
    get(searchTerm: string): Product {
        return this.items.find(item => item.name === searchTerm);
    }
}

class PersonCollection extends ArrayCollection<Person> {
    get(searchTerm: string): Person {
        return this.items.find(item =>
            item.name === searchTerm || item.city === searchTerm);
    }
}

let peopleCollection: Collection<Person> = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
let productCollection: Collection<Product> = new ProductCollection();
productCollection.add(new Product("Running Shoes", 100),
    new Product("Hat", 25));
[peopleCollection, productCollection].forEach(c =>
    console.log(`Size: ${c.count}`));

// Output
// Size: 2
// Size: 2