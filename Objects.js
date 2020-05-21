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

    Logger.log(employee);
    Logger.log(typeof employee);

    Logger.log(employee.name);
    Logger.log(employee["name"]);
    Logger.log(employee.title);

    // add item to object
    employee["department"] = "Web Analytics"
    Logger.log(employee);

    // deleting and item from object
    delete employee.age;
    Logger.log(employee);
}
