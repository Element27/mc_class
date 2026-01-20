// if
// else
// if else
// switch
// ternary operator


// if(condition){execute this code}
// if(2 + 2 > 3){ console.log("This is true") }

if(2 + 2 === 5){
    console.log("This is also true")
} else {
    console.log("This is false")
}
// ternary operator
2+2 === 5 ? console.log("This is true") : console.log("This is false");
2+2 === 5 ? console.log("This is true") : 2 + 2 ===4 ? console.log("This is also true") : console.log("This is false");

// const age = 8;

// if(age < 13){
//     console.log("You are a child")
// } else if(age >= 13 && age < 20){ // true && true = true
//     console.log("You are a teenager")
// } else {
//     console.log("You are an adult")
// }
// loops

const color = "red";

switch(color){
    case "black":
        console.log("The color is black");
        // code to be executed if expression matches value1
        break;
    case "blue":
        console.log("The color is blue");
        // code to be executed if expression matches value2
        break;
    case "red":
        console.log("The color is red");
        // code to be executed if expression matches value2
        break;
    default:
        console.log("Color not found");
        // code to be executed if expression doesn't match any case
}

// loops
// for
// while
// do while

// Dont Repeat yourself (DRY)

/**
 * starting point
 * Condition
 * increment/decrement
 * Execution of code block
*/

// for(let i = 1; i <= 10; i++){
//     console.log("Hello for the " + i + " time");
// }


// const arr =["red", "blue", "green", "yellow"];

// for(let j = 0; j < arr.length; j++){
//     console.log("Color at index " + j + " is " + arr[j]);
// }

// Foreach loop
// arr.forEach((color, index)=>{
//     console.log("For each Color at index " + index + " is " + color);
// });

// while loop

const target = 5;
let rand = 0
// while (target != rand){
//     rand = Math.floor(Math.random() * 10) + 1; // math random generate a number between 0 and 1
//     // console.log(rand);
// }

// do while loop

do {
    rand = Math.floor(Math.random() * 10) + 1;
    console.log("Do while " + rand);
} while (target != rand);

//while the player health is above 0 && while there are oppoenets remaining


const newArr = [1, 2, 3, 4, 5];
const anotherArr = [];

console.log([...newArr, 6, 7, 8]);