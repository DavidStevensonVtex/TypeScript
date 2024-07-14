// Listing 11.10 Creating a read-only prpoerty in the index.ts file in the src folder

type Person = {
    id: string,
    name: string,
    city: string,
}

class Employee {
    public readonly id: string;
    public name: string;
    #dept: string;
    public city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.#dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.#dept}`);
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
salesEmployee.id = "fidel";

// Output:
// src/index.ts(28,15): error TS2540: Cannot assign to 'id' because it is a read-only property.

// 12:52:08 PM - Found 1 error. Watching for file changes.