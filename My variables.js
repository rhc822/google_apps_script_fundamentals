function myVariables(){
  
  //string (text values)
  var myName = "Ryan Cunningham";
  Logger.log(myName);
  Logger.log(typeof myName);
  
  
  // number
  var myAge = 25;
  Logger.log(myAge);
  Logger.log(typeof myAge);
  
  
  //boolean - true or false
  var result = true;
  Logger.log(result);
  Logger.log(typeof result);
  
  
  //bad practice to not declare variables
  alpha = 10;
  Logger.log(alpha);
  Logger.log(typeof alpha);
  
  
  // functions
  var newFunction = function(a, b) {
    return a + b;
  }
  Logger.log(newFunction);
  Logger.log(typeof newFunction);
  
  Logger.log(newFunction(5, 10));
  
  
  //object
  var myDetails = {
    
    name: "Ryan Cunningham",
    age: 39
    
  }
    
  Logger.log(myDetails);
  Logger.log(typeof myDetails);    
    
    
  //array
  var myArray = [1,2,3,4,5];
  
  Logger.log(myArray);
  Logger.log(typeof myArray); 
  
}