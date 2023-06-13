// Objects
const User = {
    name: 'Navjot',
    age: 26,
    isActive: true
};

// Define a function that takes an object parameter with specific key-value pairs.
function createUser({ name, isPaid }) {
    // The function `createUser` expects an object parameter with `name` (string) and `isPaid` (boolean) properties.
    // You can use the properties within the function.
}

createUser({ name: "navjot", isPaid: true });
// Invoking the `createUser` function with an object that has `name` and `isPaid` properties matching the expected types.


// Define a function that returns an object with specific key-value pairs.
function createCourse() {
    // The function `createCourse` returns an object with `name` (string) and `price` (number) properties.
    // You need to ensure that the returned object matches this structure.
    return { name: "navjot", price: 205 };
}


// Looping through an object in TypeScript.
// Here, we have a function that takes an object parameter with specific key-value pairs.
function createEmployee({ name, isPaid }) {
    // The function `createEmployee` expects an object parameter with `name` (string) and `isPaid` (boolean) properties.
    // You can use the properties within the function.
}

const employee = {
    name: "navjot",
    isPaid: true,
    email: 'navjot@gmail.com'
};

// The commented code below does not work because we are passing more parameters than expected.
// createEmployee({ name: "navjot", isPaid: true, email: 'navjot@gmail.com' });

// Instead, we can pass the `employee` object that has properties matching the expected types.
createEmployee(employee);


// Type alias is used to define custom types in TypeScript.
// Here, we define a type `Users` with specific properties.
type Users = {
    name: string;
    email: string;
    isActive: boolean;
};

function userData(usr: Users): Users {
    // The `userData` function expects a parameter of type `Users` (an object with specific properties) and returns the same type.
    // You can access and use the properties of the `usr` object within the function.
    return {
        name: usr.name,
        email: usr.email,
        isActive: usr.isActive
    };
}

// We can also define type aliases for primitive types.
type MyString = string;
userData({ name: "navjot", isActive: true, email: 'navjot@gmail.com' });
// Invoking the `userData` function with an object that matches the `Users` type.


export {};
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
