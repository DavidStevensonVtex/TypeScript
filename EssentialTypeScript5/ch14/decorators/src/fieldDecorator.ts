// Listing 14.23 Using generic type parameters in the fieldDecorator.ts file in the src folder

export function double<This, FieldType extends number>(
    notused: any, ctx: ClassFieldDecoratorContext<This, FieldType>) {
    return function (initialValue: FieldType) {
        return initialValue * 2;
    }
}