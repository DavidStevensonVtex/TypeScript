// Listing 3.40 Settting the this value using bind in the index.js file in the primer folder

let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello" ;

myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage.bind(myObject);
myFunction("It is sunny today");

// Output
// Hi, there, It is sunny today
// Hi, there, It is sunny today