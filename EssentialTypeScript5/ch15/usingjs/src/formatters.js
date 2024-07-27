// Listing 15.9 The contents of the formatters.js file in the src folder

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
}

function writeMessage(message) {
    console.log(message);
}