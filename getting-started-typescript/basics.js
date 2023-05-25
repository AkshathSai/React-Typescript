//Primitive data types: number, string, boolean
//Comples data types: arrays, Objects
//Function types, Parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 20;
var userName;
userName = "Akshath Sai Pittala";
var isCorporate;
isCorporate = false;
//Complex Data Types
var interests;
interests = ['Programming', 'Girls', 'Food', 'Travelling'];
/* let person: {
    name: string;
    age: number;
}; */
var person;
person = {
    name: 'Akshath Sai Pittala',
    age: 20
};
/* let people: {
    name: string;
    age: number;
}[]; */
var people;
//Type inference
//let course: string = 'React + TypeScript in a Nutshell'; //(Redundant)
//let course = 'React + TypeScript in a Nutshell'; //(Regular approach)
//course = 123456;
//Union Type (when you want to store multiple types with a single variable)
//Here, courseId can be both string & number
var courseId = 'React + TypeScript in a Nutshell';
courseId = 123456;
//Functions & Types
function add(a, b) {
    return a + b;
}
function display(value) {
    console.log(value);
}
//Generics
function insertAtBegining(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBegining(demoArray, -1);
console.log(updatedArray);
