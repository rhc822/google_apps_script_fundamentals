function mathOperators(){

  var a = 10;
  var b = 2;
  
  //standard operators + - * /
  Logger.log(a + b);
  Logger.log(a - b);
  Logger.log(a * b);
  Logger.log(a / b);
  
  
  //Raise to power of
  var c = Math.pow(a, b);
  Logger.log(c);
  
  var i = 0;
  Logger.log(i);
  
  
  //increment by 1
  i++;
  Logger.log(i);
  
  
  //reduce by 1
  i--;
  Logger.log(i);
  
}


function stringOperators() {
  
  //can use single or double quotes around strings
  // BUT MUST BE CONSISTENT
  
  var string1 = "Sarah"; //ok
  var string2 = 'Smith'; //ok
  var string3 = 'John'; //not ok
  
  //concatenate strings with the plus sign +
  var fullName = string3 + " & " + string1 + " " + string2;
  Logger.log(fullName);
  
  
}


function comparisonOperators() {
  
  var a = 10;
  var b = "10";
  
  Logger.log(a);
  Logger.log(typeof a);
  Logger.log(b);
  Logger.log(typeof b);
  
  // single = sign assigns the value of
  // a = b;
  
  // Logger.log(a);
  // Logger.log(typeof a);
  
  //double ==
  Logger.log(a == b);
  
  //triple === now checks to see if the type is matching too
  Logger.log(a === b);
  
  //Not equal !=
  Logger.log(a != b);
  //false because javascript does type conversion and so values are equal
  
  //Not equal when considering value AND type !==
  Logger.log(a !== b);
  //true because the type is not equal
  
  //Greater than, less than operators
  var c = 50;
  var d = 100;
  
  Logger.log(c > d);
  Logger.log(c >= d);
  Logger.log(c < d);
  Logger.log(c <= d);
  
}