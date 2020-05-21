// Why use functions?
// you can encapsulate a chunk of code to reuse, with different arguments

// function syntax
function functionName(argument1, argument2, argument3) {

    //code to be executed when function is called (or invoked)

    // argument1, arguemnt2, argument3 are available to do stuff with inside the function

  }

//basic function
function firstFunction(){

  Logger.log("Hello World!");

}

//can pass multiple variables into function
//this function adds together two numbers
function addFunction(firstNum, secondNum) {

  // Functions often compute a return value.
  // The return value is "returned" back to the "caller"
  // When JavaScript reaches a return statement, the function will stop executing
  return firstNum + secondNum;

}

// this is globally declared so runs whenever we run any function from our menu
//Logger.log(addFunction(3, 4));

// call a function from within another function
function runOtherFunction(){

    // If the function was invoked from a statement,
    // JavaScript will "return" to execute the code after the invoking statement
    var answer = addFunction(100, 93);

    Logger.log(answer);

}

runOtherFunction();

var mult = function(a, b){

    return a * b;

}

// log the variable with the function stored in it
// Logger.log(mult);
// Logger.log(mult(5, 10));

// another example - power function
var power = function(a, b){

    return Math.pow(a, b);

}


// free to pass functions as arguments to other functions!
function superFunc(functionArgument, a, b){

    return functionArgument(a, b);

}

// Logger.log(superFunc(power, 2, 3)); // 8.0
// Logger.log(superFunc(mult, 2, 3)); // 6.0
// Logger.log(superFunc(addFunction, 2, 3)); // 5.0

// Local variables

// code here can NOT use price
// Logger.log(price);
function myPrice(){

    // code here CAN use price
    var price = 9.99;
    Logger.log(price);

    // Local variables are created when a function starts
    // Local variables are deleted when the function is completed

}

// code here can NOT use price
// Logger.log(price);
myPrice();