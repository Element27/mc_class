const PI = 3.14; // constant variable

// a group of related code.

// normal function
function greet(){
    console.log("Hello World");
}

greet();

// arrow function
const greetArrow = () => {
    console.log("Hello from Arrow function");
}

greetArrow();


const dignitries = ["Ronaldo", "Messi", "Neymar", "Mbappe", "Salah"];

// function greetRonaldo(){console.log("Hello " + dignitries[0]);}

// parameters and arguments
const greetDignitries = (name) => { 
    console.log("Hello " + name);
}

dignitries.forEach((dignitry) => {

    greetDignitries(dignitry);
});

// function sum2(a, b){
//     console.log(a + b);
// }

// sum2(5, 10);

// return

function multiply(a, b){
    return a * b;
}

// multiply(5, 10);

const result = multiply(5, 10);

console.log(result);

// scope
// global, local, block scope

function localTest(){
    const localVar = "I am a local variable";
    console.log(localVar);
    console.log(PI);
}


localTest()
// console.log(localVar);

// function parentFunction(){
//     const parentVar = "I am a parent variable";
// console.log("from parent",parentVar);
//     return childFunction = () => {
//         const childVar = "I am a child variable";
//         console.log(childVar);
//         console.log("from child",parentVar);
//     }
// }

// const child = parentFunction();
// child();

// parentFunction()