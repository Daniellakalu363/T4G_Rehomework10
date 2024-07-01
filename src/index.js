let name1 =prompt("What is your name?");
let content =prompt("What message do you have?")
let hello = document.getElementById("hello");
hello.innerHTML = `Hello ${name1}`;

let change = document.getElementById("p");

let age =prompt ("Tell me your age?");
let email =prompt("What is your email?");

alert(`Hi, ${name1} you are ${age} years old  and we will keep in touch via your email ${email}👋🏽👋🏽 ` );

function nameDisplay(){
    let name1 = prompt("What is your name?");
    hello1.innerHTML = `Hello ${name1}`; // changing the innerhtml of of the element with id hello
}