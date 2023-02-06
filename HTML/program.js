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