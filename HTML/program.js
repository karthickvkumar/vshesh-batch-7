// Number -> Any Numerical value from positive, negative, decimal, fraction

// To create variable (Temp Storage)
// syntax 
// var variable_name = value;

// var -> keyword
// variable_name -> any valid meaning Text, it should be a-z, A-Z, 0-9, _, $
// value -> Input data

var user_age = 25;
console.log(user_age);

// String -> Any text value which is typed inside '' or ""

var email_id = "karthick@gmail.com";
console.log(email_id);

// Boolean -> true or false

var result = true;
console.log(result);

// undefined -> A variable name will be created but its value will not be assingned 
var future_value;
console.log(future_value);

email_id = "k@outlook.com";

console.log(email_id);

var student_firstname = "mr.abc";
var student_lastname = "cde";
var student_regnumber = 45552;
var student_std = "X";

// Object -> It is a collection of key and value (properties)
// syntax 
// var variable_name = {
//   key1 : value1,
//   key2 : value2
// }
// key -> any valid meaning Text, it should be a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, object, array, function 

var student_information = {
  firstname : "mr.abc",
  lastname : "cde",
  regnumber : 45552,
  std: "X"
}

console.log(student_information);

// Operations in Objects 
// 4 -> Read, Edit, Add, Delete

// To Read a value from Object 
// syntax 
// object_varible_name.key;
console.log(student_information.firstname);

// To Edit a particular existing value from Object
// syntax
// object_variable_name.key = new value;
student_information.lastname = "karthick";

// To Add new value into Object 
// syntax
// object_variable_name.newKey = Value;
student_information.mobile_number = 87458565263;

// To Delete an exiting value from an Object 
// syntax 
// delete object_variable_name.key
delete student_information.std;

console.log(student_information);

// Array -> It is a collection of value (List of data)
// syntax 
// var variable_name = [value1, value2, value3, ... valueN];
// value -> Number, String, Boolean, object, array, function 

var name_list = ["mr.abc", "mr.csr", "mr.def", "mr.pod", "mr.zxy"];

console.log(name_list);

var list_of_students = [
  { name: "abc", age: 25 },
  { name: "bcs", age: 24 },
  { name: "cde", age: 22 },
  { name: "zyx", age: 26 }
];

console.log(list_of_students);

// Operations in Array 
// 4 -> Read, Edit, Add, Delete

// To Read a value from Array 
// syntax 
// array_variable_name[index];

console.log(list_of_students[0]);

// To Edit an exisiting value from an Array 
// syntax 
// array_variable_name[index] = new Value

list_of_students[3] = { name: undefined, age: undefined };

// To Add new value into Array 
// syntax 
// array_variable_name.push(value1, value2);

list_of_students.push({name: "smith", age : 30});

// syntax 
// array_variable_name.unshift(value1, value2);

list_of_students.unshift({name: "zyan", age: 20});


// To Delete a value from Array
// syntax 
// array_variable_name.splice(startIndex, deleteCount);
// startIndex - The start position of record index 
// deleteCount - How many record do you delete

list_of_students.splice(2, 1);

console.log(list_of_students);

// Function -> Block of code 
// syntax 
// function function_name(){
//   code logic
// }

// function_name -> valid meaningful text, it should refer the code logic. It should accept a-z, A-Z, 0-9, _, $

function welcome_message(){
  var message = "Hello everyone! GOod Morning";
  alert(message);
}