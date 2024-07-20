// Listing 12.22 Defining a generic interface in the index.ts file in the src folder

import { City, Person, Product, Employee } from "./dataTypes.js";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}
