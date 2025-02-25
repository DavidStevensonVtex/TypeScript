// Listing 14.39 Applying a decorator in the city.ts file in the src folder

import { time } from "./methodDecorator.js";
import { message } from "./multiples.js";

export class City {
    constructor(public name: string, public population: number) { }

    @message("First Decorator")
    @message("Second Decorator")
    getSummary(): string {
        return `Name: ${this.name}, Population: ${this.population}`;
    }
}