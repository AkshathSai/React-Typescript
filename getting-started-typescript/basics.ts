//Primitive data types: number, string, boolean
//Comples data types: arrays, Objects
//Function types, Parameters

let age: number;

age = 20;

let userName: string;

userName = "Akshath Sai Pittala";

let isCorporate: boolean;

isCorporate = false; 

//Complex Data Types

let interests: string[];

interests = ['Programming', 'Girls', 'Food', 'Travelling'];

//Type Alias

type Person = {
    name: string;
    age: number;
};

/* let person: {
    name: string;
    age: number;
}; */

let person: Person;

person = {
    name: 'Akshath Sai Pittala',
    age: 20
};

/* let people: {
    name: string;
    age: number;
}[]; */

let people: Person[];

//Type inference
//let course: string = 'React + TypeScript in a Nutshell'; //(Redundant)
//let course = 'React + TypeScript in a Nutshell'; //(Regular approach)

//course = 123456;


//Union Type (when you want to store multiple types with a single variable)

//Here, courseId can be both string & number
let courseId: string | number = 'React + TypeScript in a Nutshell';
courseId = 123456;


//Functions & Types
function add(a: number, b: number) {
    return a + b;
}

function display(value: any) {
    console.log(value);
}

//Generics

function insertAtBegining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);

console.log(updatedArray);
