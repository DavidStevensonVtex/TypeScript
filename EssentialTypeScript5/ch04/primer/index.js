// Listing 4.10 Defining a static method index.js file in the primer folder

let Product = function(name, price) {
    this.name = name ;
    this.price = price ;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}` ;
}

Product.process = (...products) =>
    products.forEach(p => console.log(p.toString()));

Product.process(new Product("Hat", 100), new Product("Boots", 100));

// Output
// toString: Name: Hat, Price: 100
// toString: Name: Boots, Price: 100