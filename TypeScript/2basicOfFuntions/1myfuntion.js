"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase();//it allow this just because num type is any
    return num + 2;
}
addTwo(2);
// addTwo("5")
//for strring
function getUpper(val) {
    return val.toUpperCase;
}
getUpper("navjot");
//multiple parameters
function signup(name, password, isPaid) { }
signup("Navjot", "Password", true);
//arrow funtion
var loginUser = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Navjot", "Password");
//strict function to retrun desired value type
var multipleWithTwo = function (num) {
    return (num * 2);
};
multipleWithTwo(10);
//
// function getValue(myValue:number):number{
//     if (myValue<3){
//         return true
//     }
//     return "200 Ok"
// }
// getValue(3)
var getStirng = function (s) {
    return "";
};
var heros = ["thor", "ironMan"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1;
}
function handleError(errmsg) {
    // console.log(errmsg);
    throw new Error(errmsg);
    // return 1;
}
