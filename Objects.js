// Objects

function objectFunction(){

    // create with curly brackets
    var newObj = {};

    // objects consist of key/value pairs
    // ordering is not important
    // often have line breaks to make easier to read
    var employee = {
        name: "Joe Bloggs",
        age: 25,
        title: "Data analyst"
    }

    console.log(employee);
    console.log(typeof employee);

    console.log(employee.name);
    console.log(employee["name"]);
    console.log(employee.title);

    // add item to object
    employee["department"] = "Web Analytics"
    console.log(employee);

    // deleting and item from object
    delete employee.age;
    console.log(employee);
}

objectFunction();