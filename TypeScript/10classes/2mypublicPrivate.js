"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//by default public
var Person = /** @class */ (function () {
    function Person(email, name) {
        // #name:string // in javascript world
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
    return Person;
}());
var jitesh = new Person("navjot@ok.com", "navjot");
// jitesh.name="Navjot Singh"
// navjot.city //not accessble because of private
// more advance people like code like that 
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var navjot = new User("navjot@ok.com", "navjot");
