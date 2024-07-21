// Listing 14.16 The contents of the classDecorator.ts file in the src folder

export function serialize<T extends new (...args: any) => any>(
    originalClass: T, ctx: ClassDecoratorContext) {

    const className = String(ctx.name);

    return class extends originalClass {

        serialize() {
            console.log(`${className}: ${JSON.stringify(this)}`);
        }
    }
}