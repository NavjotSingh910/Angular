// Using a union type to allow a variable to have either a `number` or `string` value.
let score: number | string = 33;
score = 40;
score = 55;

// Defining types `User` and `Admin` with similar properties.
type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

// The variable `navjot` can have either `User` or `Admin` type.
let navjot: User | Admin = { name: 'Navjot', id: 5 };
navjot = { username: 'Navjot@blueaves.com', id: 5 };

// The function `getDBId` accepts a parameter of type `string` or `number`.
function getDBId(id: string | number) {
    if (typeof id === 'string') {
        id.toLowerCase(); // Calling string-specific methods is allowed within the string branch.
    }
    if (typeof id === 'number') {
        id + 2; // Performing numeric operations is allowed within the number branch.
    }
}

// Defining an array `data` that can contain elements of type `string` or `number`.
const data: (string | number)[] = [1, 2, 3, 4, '5'];

// Defining an array `data1` that can contain elements of type `string`, `number`, or `boolean`.
const data1: (string | number | boolean)[] = [1, 2, 3, 4, '5', true];

let pi: 3.14 = 3.14;
// The variable `pi` can only have the value 3.14, as defined by the type annotation.
// pi = 2222; // Assigning a different value to `pi` results in a type error.

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'middle';
// seatAllotment = 'other'; // Assigning a value other than 'aisle', 'middle', or 'window' results in a type error.

export {};
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
