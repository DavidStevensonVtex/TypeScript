// Listing 3.39 invoking a function in the index.js file in the primary folder

let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello" ;

myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today");

// Output
// Hi, there, It is sunny today
// Hello, It is sunny today