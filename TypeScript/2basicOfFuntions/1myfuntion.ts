function addTwo(num: number) {
    // The parameter `num` is expected to be of type number.
    // Uncommenting the line below would cause a TypeScript error
    // since the `toUpperCase` method is not available on numbers.
    // num.toUpperCase();

    return num + 2; // Adds 2 to the `num` parameter and returns the result.
}

addTwo(2); // Invoking the `addTwo` function with the number 2 as an argument.
// Uncommenting the line below would cause a TypeScript error
// since the argument is expected to be a number, not a string.
// addTwo("5");


function getUpper(val: string) {
    // The parameter `val` is expected to be of type string.
    return val.toUpperCase(); // Returns the uppercase version of the `val` string.
}

getUpper("navjot"); // Invoking the `getUpper` function with the string "navjot" as an argument.


function signup(name: string, password: string, isPaid: boolean) {
    // The `signup` function expects three parameters: name (string), password (string), and isPaid (boolean).
    // You can perform operations related to user signup here.
}

signup("Navjot", "Password", true); // Invoking the `signup` function with the provided arguments.


let loginUser = (name: string, password: string, isPaid: boolean = false) => {
    // The arrow function `loginUser` expects three parameters: name (string), password (string), and isPaid (boolean).
    // You can perform login operations here.
};

loginUser("Navjot", "Password"); // Invoking the `loginUser` function with the provided arguments.


let multipleWithTwo = (num: number): number => {
    // The arrow function `multipleWithTwo` expects a parameter of type number and returns a number.
    return num * 2; // Multiplies the `num` parameter by 2 and returns the result.
};

multipleWithTwo(10); // Invoking the `multipleWithTwo` function with the number 10 as an argument.


// function getValue(myValue:number):number{
//     if (myValue<3){
//         return true
//     }
//     return "200 Ok"
// }

// The commented code above has a type mismatch issue.
// The function is declared to return a number, but in the if statement,
// it tries to return a boolean value (true). Similarly, in the else block,
// it tries to return a string value ("200 Ok").
// This will cause a TypeScript error.


const getStirng = (s: string): string => {
    // The arrow function `getStirng` expects a parameter of type string and returns a string.
    return ""; // Returns an empty string.
};


const heros = ["thor", "ironMan"];
heros.map((hero): string => {
    // The `map` function iterates over each element in the `heros` array and expects a callback function.
    // The callback function expects a parameter named `hero` of type string.
    return `hero is ${hero}`; // Returns a string interpolation of the current `hero`.
});


function consoleError(errmsg: string): void {
    // The `consoleError` function expects a parameter of type string and does not return a value (void).
    console.log(errmsg); // Logs the error message to the console.
    // Uncommenting the line below would cause a TypeScript error
    // since the function is annotated to return `void`.
    // return 1;
}


function handleError(errmsg: string): never {
    // The `handleError` function expects a parameter of type string and is annotated to never return a value.
    // It is commonly used to handle errors and throw exceptions.
    throw new Error(errmsg); // Throws a new Error object with the provided error message.
    // Uncommenting the line below would cause a TypeScript error
    // since the function is annotated to return `never`.
    // return 1;
}

export {
    // Exporting an empty object to avoid errors.
    // In a larger codebase, you would export specific variables, functions, or classes here.
}
