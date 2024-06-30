// Listing 3.41 Using an arrow function in the index.js file in the primer folder

let myObject = {
    greeting: "Hi, there",

    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello" ;

let writer = myObject.getWriter();
writer("It is raining today");

let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");

// Output
// Hi, there, It is raining today
// Hello, It is sunny today