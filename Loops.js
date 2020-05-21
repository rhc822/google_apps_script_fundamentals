// for loops

function forLoop() {

  var fruitsArray = ["Apple", "Banana", "Pear", "Strawberry"];
  
  Logger.log(fruitsArray);
  
  for (var i = 0; i < fruitsArray.length; i++) {
    
    Logger.log(i);
    Logger.log(fruitsArray[i]);
    
  }

}


// forEach loop example

function forEachLoop() {

  var fruitsArray = ["Apple", "Banana", "Pear", "Strawberry"];
  
  fruitsArray.forEach(function(item, i) {
  
    Logger.log(item);
    Logger.log(i);
  
  });

}


// second forEach loop example
// call a function inside loop

function forEachLoopTemp(){

  var celsiusArray = [0, 13, 19, 11, 24, 29, 34, 17, 4];
  var farenheitArray = [];
  
  celsiusArray.forEach(function(celsiusTemp) {
  
    // call function here
    var farenheitTemp = convertCtoF(celsiusTemp);
    // Logger.log(farenheitTemp);
    
    farenheitArray.push(farenheitTemp)
    
  });

  Logger.log("Celsius array: " + celsiusArray);
  Logger.log("Farenheit array: " + farenheitArray);
  
}


// function to convert celsius to farenheit
function convertCtoF(t) {

  return (t * 9/5) + 32;

}


// forEach does not work for objects
// gives error

function forEachObjectTest() {

  var employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data analyst"
  }

  employee.forEach(function(item) {
  
    Logger.log(item);
  
  });
  
}


// instead, use a for...in loop with objects
function forInObjectLoop() {

  var employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data analyst"
  }

  for (var property in employee) {
  
    // log is the key
    Logger.log(property); // e.g. name
    
    // log the corresponding value
    Logger.log(employee[property]);
  
  }
  
}










