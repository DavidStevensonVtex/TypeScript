// Listing 3.17 Using a rest parameter in the index.js file in the primer folder

let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(...numbers) {
    return numbers.reduce(function(total, val) {
        return total + val ;
    }, 0);
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100,200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// Output
// Hat price: 100
// Boots price: 100
// Total Price: 100100 string
// Total: 600 number
// Total: 300 number