// Listing 10.20 Adding properties with different types in the index.ts file in the src folder

type Person = {
    id: string,
    name: string,
    city: string,
    contact: number
}

type Employee = {
    id: string,
    company: string,
    dept: string,
    contact: string
}

type EmployedPerson = Person & Employee;

let typeTest = ({} as EmployedPerson).contact;
// index.d.ts: declare let typeTest: never;
// There is no intersection between string and number types, so the
// compiler has used the never type for the merged property.