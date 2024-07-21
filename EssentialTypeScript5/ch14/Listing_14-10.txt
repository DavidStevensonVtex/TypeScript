// Listing 14.10 The contents of the methodDecorator.ts file in the src folder

export function time(...args) {
    return function (): string {
        return "Hello, Decorator!";
    }
}

// Output
// Name: London, Population: 8982000
// Hello, Decorator!