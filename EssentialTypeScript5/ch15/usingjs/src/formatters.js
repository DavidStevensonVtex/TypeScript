// Listing 15.19 Exporting a function in the formatters.js file in the src folder

// @ts-nocheck

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 * Format something that has a money value
 * @param { string } thing - the name of the item
 * @param { number | string} cost - the value associated with the item
 */

export function costFormatter(thing, cost) {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
    } else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}

export function writeMessage(message) {
    console.log(message);
}

// Output
// The Cart has 4 items
// The Cart costs $341.3