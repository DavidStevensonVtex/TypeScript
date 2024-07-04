// Listing 4.1 Replacing the code in the index.js file in the primer folder

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2 ;
    }
}

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);

// Output
// Hat: 100, 120