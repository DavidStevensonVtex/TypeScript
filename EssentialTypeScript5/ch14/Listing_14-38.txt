// Listing 14.38 The contents of the multiples.ts file in the src folder

export function message(message: string) {
    console.log(`Factory function: ${message}`);
    return function (method: any, ctx: ClassMemberDecoratorContext) {
        console.log(`Get replacement: ${message}`);
        return function (this: any, ...args: any[]) {
            console.log(`Message: ${message}`);
            return method.call(this, ...args);
        }
    }
}