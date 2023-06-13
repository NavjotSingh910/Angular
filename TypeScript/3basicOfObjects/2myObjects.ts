//objects
// Define a type `User` with specific properties.
type User = {
    readonly _Id: string; // The `_Id` property is marked as `readonly`, indicating that it cannot be modified once assigned a value.
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number; // The `creditCard` property is marked as optional by adding a question mark (?).
};

let user: User = {
    _Id: "1234",
    name: "Navjot",
    email: "navjot@gmail.com",
    isActive: true,
    // The `creditCard` property is optional, so it can be omitted from the object.
    // If not provided, it will have the value `undefined`.
};

// The `readonly` property `_Id` cannot be reassigned a new value.
// user._Id = "56677";

// The `isActive` property can be modified since it is not marked as `readonly`.
user.isActive = false;


// Mixing and matching types using intersection (&) operator.
type cardNumber = {
    cardNum: string;
};

type cardDate = {
    cardDate: string;
};

// Define a type `cardDetails` by combining `cardNumber`, `cardDate`, and adding an additional property `cvv`.
type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

let card: cardDetails = {
    cardNum: "3234",
    cardDate: "21/06/2023",
    cvv: 112
};

console.log(card); // Outputs the `card` object to the console.

export {};
// Exporting an empty object to avoid TypeScript errors related to exporting.
// In a larger codebase, you would export specific variables, functions, or classes here.
