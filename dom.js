// DOM: Document object model (How html elements are structured and accessed in JavaScript)
//window.document
// window is the root node
// window.alert("hello world");


// get by tag name
const title = document.getElementsByTagName('h1');

console.log("tag",title);
// title[0].innerText = "Hello World from JS";

// get by class name
const titleByClass = document.getElementsByClassName('title');
console.log("class", titleByClass);

// get by id
const firstId = document.getElementById('first');
console.log("id", firstId);

// query selector (more versatile)
const querySelector = document.querySelector('.title');
const querySelectorAll = document.querySelectorAll('.title');


const dviContainer = document.getElementById('div_con');

// create element
const dream = document.createElement('h1');
const big_thing = document.createElement('h1');
const desc = document.createElement('p');
const input = document.createElement('input');
const butn = document.createElement('button');
const desc2 = document.createElement('p');

// set content
dream.innerText = "Enter with a dream";
big_thing.innerText = "Exit with the next big thing";
desc.innerText = "This is a simple paragraph created using JavaScript and DOM manipulation.";
butn.innerText = "Submit";
desc2.innerText = "This is another paragraph created using JavaScript and DOM manipulation.";

// set attributes
dream.classList.add('title');
big_thing.classList.add('title');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter your idea here');
input.classList.add('input-field');
butn.classList.add('btn-submit');
desc.classList.add('description');
desc2.classList.add('description');


//append elements
dviContainer.appendChild(dream);
dviContainer.appendChild(big_thing);
dviContainer.appendChild(desc);
dviContainer.appendChild(input);
dviContainer.appendChild(butn);
dviContainer.appendChild(desc2);