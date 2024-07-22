// Listing 14.21 The contents of the fieldDecorator.ts file in the src folder

export function double(notused: any, ctx: ClassFieldDecoratorContext) {
    return function (initialValue) {
        return initialValue * 2;
    }
}