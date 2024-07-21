// Listing 14.6 The contents of the city.ts file in the src folder

export class City {
    constructor(public name: string, public population: number) { }

    getSummary(): string {
        return `Name: ${this.name}, Population: ${this.population}`;
    }
}