// Listing 14.41 Using string composition in the multiples.ts file in the src folder

export function message(message: string) {
    console.log(`Factory function: ${message}`);
    return function (method: any, ctx: ClassMemberDecoratorContext) {
        console.log(`Get replacement: ${message}`);
        return function (this: any, ...args: any[]) {
            // console.log(`Message: ${message}`);
            // return method.call(this, ...args);
            return `${message} (${method.call(this, ...args)})`;
        }
    }
}

// Output
// Factory function: First Decorator
// Factory function: Second Decorator
// Get replacement: Second Decorator
// Get replacement: First Decorator
// Auto-accessor initialized to 20
// First Decorator (Second Decorator (Name: London, Population: 8982000))