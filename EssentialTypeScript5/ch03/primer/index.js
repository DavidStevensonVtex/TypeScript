// Listing 3.34 Using the concise methods syntax in the index.js file in the primer folder

let hat = { 
    name: "Hat", 
    _price: 100, 
    priceIncTax: 100 * 1.2,

    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2 ;
    },

    get price() {
        return this._price ;
    },

    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
} ;

let boots = { 
    name: "Boots", 
    price: "100",

    get priceIncTax() {
        return Number(this.price) * 1.2;
    }
} ;

hat.writeDetails();
hat.price = 120 ;
hat.writeDetails();

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = "120" ;
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

// Output
// Hat: 100, 120
// Hat: 120, 144
// Boots: 100, 120
// Boots: 120, 144