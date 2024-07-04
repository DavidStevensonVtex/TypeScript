// Listing 4.22 Using a map in the index.js file in the primer folder

class Product {
    constructor (name, price) {
        this.name = name ;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}` ;
    }
}

let data = new Map();
data.set("hat", new Product("Hat", 100));
data.set("boots", new Product("Boots", 100));

[...data.keys()].forEach(key => console.log(data.get(key).toString()));

// Output
// toString: Name: Hat, Price: 100
// toString: Name: Boots, Price: 100