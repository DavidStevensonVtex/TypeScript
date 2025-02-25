// Listing 15.21 Adding a statement in the formatter.d.ts file in the src folder

export declare function sizeFormatter(thing: string, count: number): void;
export declare function costFormatter(thing: string, cost: number | string): void;
export declare function writeMessage(message: string);

// Output
// The Cart has 4 items
// The Cart costs $341.3
// Test message