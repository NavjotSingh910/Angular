// Enums
// Enums in TypeScript allow you to define a set of named values that represent a specific set of possibilities.
// However, when enums are transpiled to JavaScript, they can generate additional code, resulting in larger bundle sizes.
// To mitigate this, you can use the const enum syntax, which ensures that only the necessary values are included in the transpiled code.

// Enum definition using const enum to optimize code generation
const enum seatChoice {
    Aisle = "asile",    // Enum member representing an aisle seat, assigned the value "asile"
    Middle = 3,        // Enum member representing a middle seat, assigned the numeric value 3
    Window,            // Enum member representing a window seat, automatically assigned the next numeric value (4)
    Fourth             // Enum member representing the fourth seat, automatically assigned the next numeric value (5)
}

// Declaring a variable and assigning it the value of the Middle enum member
// The variable hcSeat will hold the value 3, which corresponds to the Middle enum member
const hcSeat = seatChoice.Middle;

// The hcSeat variable now represents a middle seat choice.
// You can use it in your code to determine or store the selected seat choice.

// Please note that using const enum means the enum values will not be available at runtime in JavaScript.
// They are resolved and optimized during the TypeScript compilation process.

// If you have any further questions or need more assistance, feel free to ask!
