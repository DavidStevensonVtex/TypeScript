# Listing 2.37 Running the compiler

tsc

# Book: There can be limitations to this feature, and the addition of a property that isn't supported (badProperty)
# has produced an error about the value assigned to the type property.

# This happens because it can be difficult to describe the types that pure JavaScript expents, and sometimes
# the error messages can be more of a general indication that something is wrong.

# Personal Note: Visual Studio Code did indicate the badProperty was bad with a squiggly red underline.

# src/index.ts:30:9 - error TS2769: No overload matches this call.
#   Overload 1 of 2, '(questions: QuestionCollection<any>, initialAnswers?: Partial<any>): Promise<any> & { ui: Prompt<any>; }', gave the following error.
#     Type '"list"' is not assignable to type '"number"'.
#   Overload 2 of 2, '(questions: QuestionCollection<any>, initialAnswers?: Partial<any>): Promise<any>', gave the following error.
#     Type '"list"' is not assignable to type '"number"'.

# 30         type: "list",
#            ~~~~



# Found 1 error in src/index.ts:30