// Listing 14.28 The contents of the autoAccessorDecorator.ts file in the src folder

export function autolog(
    accessor: any,
    ctx: ClassAccessorDecoratorContext) {
    const name = String(ctx.name);
    return {
        get() {
            const result = accessor.get.call(this);
            console.log(`Auto-accessor ${name} get returned ${result}`);
            return result;
        },
        set(value) {
            console.log(`Auto-accessor ${name} set to ${value}`);
            return accessor.set.call(this, value);
        },
        init(value) {
            console.log(`Auto-accesor initialized to ${value}`);
            return value;
        }
    }
}