// Listing 7.37 Using definitive assignment assertion in the index.ts file in the src folder

function calculateTax(amount: number, format: boolean)
    : string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}

let taxValue!: string | number | null;
eval("taxValue = calculateTax(100, false)");

if (taxValue !== null) {
    let nonNullTaxValue: string | number = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${taxValue.charAt(0)}`);
            break;
    }
} else {
    console.log("Value is not a string or a number");
}

// Output
// Number Value: 120.00
