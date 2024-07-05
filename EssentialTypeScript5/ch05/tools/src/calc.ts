// Listing 5.23 The contents of the calc.ts file in the src folder

export function sum(...vals: number[]): number {
    return vals.reduce((total, val) => total += val);
}