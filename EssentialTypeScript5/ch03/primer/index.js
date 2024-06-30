// Listing 3.36 Invoking a function which uses this keyword in the index.js file in the primer method

function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello" ;

writeMessage("It is sunny today");

// Output
// Hello, It is sunny today