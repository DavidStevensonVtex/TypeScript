// Listing 14.27 Using type parameters in the accessorDecorator.ts file in the src folder

export function log<This, ValueType extends number>(
    setter: (ValueType) => void,
    ctx: ClassSetterDecoratorContext<This, ValueType>): ((ValueType) => void);

export function log<This, ValueType extends number>(
    getter: () => ValueType,
    ctx: ClassGetterDecoratorContext<This, ValueType>): () => ValueType;

export function log(accessor: any, ctx: ClassSetterDecoratorContext | ClassGetterDecoratorContext) {
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