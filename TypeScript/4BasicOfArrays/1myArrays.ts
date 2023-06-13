// Arrays

// An empty array `superHeros` is defined without specifying the type.
// Since it doesn't have any initial values, TypeScript infers it as `never[]` by default.
// const superHeros: never[] = [];
// The above code results in an error because the `never` type cannot be assigned any value.

// To define an array of strings, you should explicitly specify the type as `string[]`.
const superHeros: string[] = [];
const heroPower: number[] = [];

superHeros.push("SpiderMan"); // Adding a string value to the `superHeros` array.
heroPower.push(5); // Adding a number value to the `heroPower` array.

// You can also define arrays using the `Array` syntax.
const heroAge: Array<number> = [];
heroAge.push(23);

// Creating a type `user` with specific properties.
type user = {
    name: string;
    isActive: boolean;
};

const allUser: user[] = [];
allUser.push({ name: "navjot", isActive: true });
// Adding an object that matches the `user` type to the `allUser` array.

// Defining an array of arrays using `number[][]`.
const MLModel: number[][] = [
    [255, 255, 255],
    [0, 255, 255]
];
// An array `MLModel` containing nested number arrays.

export {};
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
