# Listing 6.11 Running the TypeScript linter

npx eslint .

# Output
# 5:5  error  'printMessage' is never reassigned. Use 'const' instead  prefer-const
# 7:5  error  'message' is never reassigned. Use 'const' instead       prefer-const
# 10:1  error  Unexpected 'debugger' statement                          no-debugger 
# 12:5  error  'total' is never reassigned. Use 'const' instead         prefer-const