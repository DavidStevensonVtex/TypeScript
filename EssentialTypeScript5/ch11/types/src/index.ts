// Listing 11.11 Simplifying the constructor in the index.ts file in the src folder

type Person = {
    id: string,
    name: string,
    city: string,
}

class Employee {

    constructor(public id: string, public name: string,
        private dept: string, public city: string) {
        // No statements required
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = "fidel";

// Output:
// Fidel Vega works in Sales