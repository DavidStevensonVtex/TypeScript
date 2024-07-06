// Listing 7.18 Assigning the any type in the index.ts file in the src folder

function calculateTax(amount: any): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

let newResult: any = calculateTax(200);
let myNumber: number = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);

// Output
// Price: 100
// Full amount in tax: $120.00
// Half share: NaN
// ...\types\dist\index.js: 13
// console.log(`Number value: ${myNumber.toFixed(2)}`);
//                                       ^

//     TypeError: myNumber.toFixed is not a function