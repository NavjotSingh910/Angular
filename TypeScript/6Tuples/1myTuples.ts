// Tuples are used to define an array with a specific order of types.

// Using an array to store values of type `string`, `number`, or `boolean`.
let userArray: (string | number | boolean)[] = [1, "navjot", true];

// Defining a tuple `userTuple` with a specific order of types: `string`, `number`, and `boolean`.
let userTuple: [string, number, boolean] = ["navjot", 1, true];

// Defining a custom type `user` as a tuple with a specific order of types: `string` and `number`.
type user = [string, number];

// Creating a variable `newUser` of type `user` (a tuple).
const newUser: user = ['navjot', 12];
newUser[1] = 1; // Modifying the value at index 1 is allowed.

// Tuples in TypeScript have a fixed length, so you cannot push additional elements.but in older version it is posible
// newUser.push(true); // This line will result in a compilation error.

export {};
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
