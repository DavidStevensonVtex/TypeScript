// Listing 14.24 The contents of the accessorDecorator.ts file in the src folder

export function log(accessor: any, ctx: ClassAccessorDecoratorContext | ClassGetterDecoratorContext) {
    const name = String(ctx.name);
    return function (this: any, ...args: any[]) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${name} get returned ${result}`);
            return result;
        } else {
            console.log(`${name} set to ${args}`);
            return accessor.call(this, ...args);
        }
    }
}