// Define an interface `User` with various properties and methods.
interface User {
    readonly dbId: number; // A read-only property `dbId` of type `number`.
    email: string; // A property `email` of type `string`.
    userId: number; // A property `userId` of type `number`.
    googleId?: null; // An optional property `googleId` that can be `null`.
    startTrail(): string; // A method `startTrail` that takes no parameters and returns a `string`.
    getCoupon(couponName: string): number; // A method `getCoupon` that takes a `couponName` of type `string` and returns a `number`.
}

// Re-opening the `User` interface to add more properties.
interface User {
    githubId: string; // A property `githubId` of type `string`.
}

// Create an object `navjot` that implements the `User` interface.
const navjot: User = {
    dbId: 205,
    email: 'navjot@gmail.com',
    userId: 333,
    startTrail: () => {
        return "20/6/2023";
    },
    getCoupon: (name: "navjot2023") => {
        return 2023;
    },
    githubId: "navjot@gitHub"
};

// Define another interface `Admin` that extends the `User` interface.
interface Admin extends User {
    role: 'admin' | 'user'; // A property `role` that can have values either `'admin'` or `'user'`.
}

// Create an object `navjotAdmin` that implements the `Admin` interface.
const navjotAdmin: Admin = {
    dbId: 205,
    email: 'navjot@gmail.com',
    userId: 333,
    startTrail: () => {
        return "20/6/2023";
    },
    getCoupon: (name: "navjot2023") => {
        return 2023;
    },
    githubId: "navjot@gitHub",
    role: 'admin'
};
