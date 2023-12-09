/**
 * Regular functions v/s arrow funtions
 */

//Regular
function multiply(a, b){
    return a * b;}

//Arrow. (No need to write return)
const multiply2 = (a, b) => a * b;

/**
 * regular funtions v/S arrow functions with 1 parameter
 */
// Regular function with 1 parameter
function square(x) {
    return x * x;}
  
  // Arrow function with 1 parameter (Parenthesis can be omited)
  const square2 = x => x * x;


  /**
 * regular funtions v/S arrow functions with no parameter
 */
// Regular function
function sayHello() {
    console.log("Hello!");
  }
  
  // Arrow function, parenthesis need to be included
  const sayHello2 = () => console.log("Hello!");

  // Regular function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (x) {
  return x * x;
});

// Arrow function
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers2 = numbers.map(x => x * x);

console.log(squaredNumbers2);


/** 
 * Arrow functions inherit "this" value from the surrounding scope
 * "This" is related to an object and a function associated to it.
 */

//In a regular function, setTimeOut can't access the this.value
//setTimeout= runs a function after certain time
const person = {name: "John", SayHello: function () {
        setTimeout(function() {console.log("Hello, " + this.name + "!")}, 
                    1000);
    },
};
person.SayHello(); // Output: Hello, undefined!

//Arrow function: setTimeout can access the this.value, because it is bound to the surroundind scope
const person2 = {name: "John", SayHello: function () {
        setTimeout(() => {console.log("Hello, " + this.name + "!!!")},
        1000);
    },
};

person2.SayHello(); //Output: Hello John!!!

/**
 * Another way of writing the first function:
 */
const person3 = {name: "John", Greeting: greeting} 

function greeting () {
    setTimeout(function() {
                console.log("Hello Person 3, " + this.name + "!")}, 1000);
};

person3.Greeting(); // Output: Hello, undefined!


const person4 = {name: "Johna", Greeting: greeting} 

function greeting () {
    setTimeout(() => {
                console.log("Hello Person 4, " + this.name + "!")}, 1000);
};

person4.Greeting(); // Output: Hello, undefined!