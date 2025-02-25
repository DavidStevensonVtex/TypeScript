// Listing 12.1 The contents of the dataTypes.ts file in the src folder

export class Person {
    constructor(public name: string, public city: string) { }
}

export class Product {
    constructor(public name: string, public price: number) { }
}

export class City {
    constructor(public name: string, public population: number) { }
}

export class Employee {
    constructor(public name: string, public role: string) { }
}