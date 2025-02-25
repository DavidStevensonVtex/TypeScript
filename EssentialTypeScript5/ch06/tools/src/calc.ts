// Listing 6.18 Making a test fail in the calc.ts file in the src folder

export function sum(...vals: number[]): number {
    return vals.reduce((total, val) => total += val) + 10;
}

// × check result value (8 ms)

// ● check result value

//   expect(received).toBe(expected) // Object.is equality

//   Expected: 60
//   Received: 70

//      5 | test("check result value", () => {
//      6 |     let result = sum(10, 20, 30);
//   >  7 |     expect(result).toBe(60);
//        |                    ^
//      8 | })
//      9 |

//     at Object.<anonymous> (src/calc.test.ts:7:20)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total