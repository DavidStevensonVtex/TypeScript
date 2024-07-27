// Listing 15.24 The contents of the debug.d.cts file in the types folder

declare interface Debug {
    (namespace: string): Debugger
}

declare interface Debugger {
    (...args: string[]): void,
    enabled: boolean
}

declare var debug: Debug & { default: Debug };

export = debug;