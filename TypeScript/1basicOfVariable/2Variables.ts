let greetings: string = 'Navjot';
// It is generally recommended to let TypeScript infer the type of a variable based on its initial value.
// In this case, TypeScript can automatically infer that `greetings` is of type string.
// Explicitly specifying the type is not necessary, but it can be done for clarity or when TypeScript cannot infer the type correctly.

console.log(greetings); // Outputs the value of `greetings` to the console.


// primitive number
let userId: number = 33344;
let rollId = 33.344;
// Both `userId` and `rollId` are numbers, but the type annotation for `rollId` is not necessary.
// TypeScript can infer the type based on the value assigned to it.

// boolean
let isLoggedIn: boolean = false;
// The variable `isLoggedIn` is explicitly annotated as boolean, indicating that it can only hold true or false.

// real use case of :type
let hero;
// The variable `hero` is declared without an explicit type annotation.
// TypeScript infers its type as `any`, which means it can hold values of any type.
// It is generally recommended to avoid using `any` unless absolutely necessary.

function getHero() {
    return 'Thor';
    return true;
}
// The function `getHero` returns either a string or a boolean.
// However, the return type is not explicitly annotated, so TypeScript infers it as `string | boolean`,
// which means the function can return either a string or a boolean.

hero = getHero();
// The return value of `getHero` can be either a string or a boolean, so TypeScript assigns the type `string | boolean` to `hero`.
// Assigning values of different types to the same variable can lead to potential issues, and it is generally recommended to avoid it.


// For now, we use `export` to remove errors.
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
export {

}
