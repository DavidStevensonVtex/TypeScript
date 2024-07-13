// Listing 10.23 Merging methods in the index.ts file in the src folder

type Person = {
    id: string,
    name: string,
    city: string,
    getContact(field: string): string
}

type Employee = {
    id: string,
    company: string,
    dept: string,
    getContact(field: number): number
}

type EmployedPerson = Person & Employee;

let person: EmployedPerson = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales",
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512346543
    }
};

let typeTest = person.getContact;
// index.d.ts: declare let typeTest: ((field: string) => string) & ((field: number) => number);

let stringParamTypeTest = person.getContact("Alice");
let numberParamTypeTest = person.getContact(123);

console.log(`Contact: ${person.getContact("")}`);
console.log(`Contact: ${person.getContact(1)}`);

// Output:
// Contact: Alice
// Contact: 6512346543

// index.d.ts
// type Person = {
//     id: string;
//     name: string;
//     city: string;
//     getContact(field: string): string;
// };
// type Employee = {
//     id: string;
//     company: string;
//     dept: string;
//     getContact(field: number): number;
// };