// Listing 7.8 Displaying the variable type in the index.ts file in the src folder

let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

// Output
// undefined = undefined
// 12 = number
// Hello = string
// true = boolean