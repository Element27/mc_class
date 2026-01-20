//array also called a list
// items in a array are fetched by indexing their reference.
// arrays are zero indexed ie they start counting from zero


//keywords
// methods
let hero = "Spiderman"

const heroArray = ["Captain America", "Thor", "Hulk", "Vision", 24];

// console.log(heroArray);

// push and pop and unshift and shift 
// push and unshift adds to the array
// pop and shift removes from the array

heroArray.push("Hawkeye"); // push adds to the end of the array
// console.log(heroArray)

heroArray.unshift("Black Panther"); // shift removes the first element in the array
// console.log(heroArray)

// .length


// find, filter, indexOf, sort
const numsArray = [2, 3, 4, 2, 4, 5, 2, 5, 7, 3, 73, 8, 0, 0, 5, 9, 3, 2, 7, 0, 6];

//find is going to find the first element that matches the condition
numsArray.find((item) => item === 7)

// console.log(numsArray.find((item) => item === 7));

// filter will get everything that matches the condition
// console.log(numsArray.filter((item) => item === 2));

// indexOf will get the index of the first element that matches the condition
// console.log(numsArray.indexOf(5));

// sort will sort the array
// console.log(numsArray.sort());
// sort in asc
// console.log(numsArray.sort((a, b) => a - b));
//sort in desc
// console.log(numsArray.sort((a, b) => b - a));

// matrix
const matrixArr = [
  [1, 2, 3], // 0
  [4, 5, 6],// 1
  [7, 8, 9],// 2
]


//objects are key value pairs also called dictionaries
const person = {
  name: "John",
  age: 30,
  country: "USA"
}

console.log(person.name);

// keys
// values
// entries

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// an array of objects
// arrys in an object

const student = {
  fullName: "John Doe",
  class: "ss2",
  subjects: ["Maths", "English", "Science"],
  marks: {
    Maths: 80,
    English: 70,
    Science: 90
  },
  isMale: true,
}

const students = [
  {
    fullName: "John Doe",
    class: "ss2",
    subjects: ["Maths", "English", "Science"],
    marks: {
      Maths: 80,
      English: 70,
      Science: 90
    },
    isMale: true,
  }, {
    fullName: "Jane Doe",
    class: "ss2",
    subjects: ["Maths", "English", "Science"],
    marks: {
      Maths: 87,
      English: 74,
      Science: 69
    },
    isMale: false,
  },
]

console.log(students)
console.log(students[0])
console.log(students[1])
//json javascript object notation



