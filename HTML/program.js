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

// Operators 
// 1. Arithmetic Operators +, -, *, / , %, ++, --
// 2. Assignemnt Operators = 
// 3. Comparisoin Operators < (less than), <= (less than or equal to), > (greater than), >= (greater than or equal to), ==, !=, ===, !== 
// 4. Logical Operators && (AND), || (OR), ! (NOT)

// && - AND
// true && true = true 
// false && true = false
// true && false = false
// false && false = false 

// || - OR
// true || true = true 
// false || true = true 
// true || false = true 
// false || false = false 

// ! - NOT 
// !true = false 
// !false = true 

// If - Else condition 
// syntax 
// if(condition){
//   code block
// }
// else{
//   code block
// }

// Problem : To evaluate given user age is eligible for Vote ?
// Solution :
// 1. I should pass a Number as Input (Variable assign the value)
// 2. If the Number is greater then or equal to 18 -> The user is eligible for vote 
// 3. If the Number is less then 18 -> The user is Not eligible for vote

function check_voting_status(){
  var age = prompt("Enter a user age");
  if(age >= 18){
    alert("The user is eligible for vote");
  }
  else{
    alert("The user is Not eligible for vote");
  }
}

// Multiple IF Else 
// syntax 
// if(condition1){

// }
// else if(condition2){

// }
// else{

// }

// Problem: To find the given user age catgerory 
// criteria for age catgerory
// 1. Age is less then 18 -> The user is Minor catgerory
// 2. Age is greater then or equal to 18 and less then 60 -> The user is Major catgerory
// 3. Age is above 60 -> The user is senior catgerory

function check_user_age_catgory(){
  var age = prompt("Enter user age");
  if(age < 18){
    alert("The user is Minor catgerory");
  }
  else if(age >= 18 && age < 60){
    alert("The user is Major catgerory");
  }
  else{
    alert("The user is senior catgerory");
  }
}

// for - Loop 
// syntax 
// for(initialization; condition; increment/decrement){

// }

for(var count = 1; count <= 10; count++){
  console.log("Loop is running on count", count);
}

// Problem: To find even numbers for given N number of limit
// solution: 
// 1. To provide a input number 
// 2. Formula -> number % 2 === 0 -> Even Number 
// 3. Using loop for repeating the formula 

function find_even_numbers(){
  var lastNumber = prompt("Enter a last number");
  for(var count = 0; count <= lastNumber; count++){
    if(count % 2 === 0){
      console.log(count, "is a Even Number");
    }
  }
}

// While - Loop
// syntax 
// while(condition){

// }

function whileLoop(){
  var count = 1;
  while(count <= 5){
    console.log("While loop count", count);
    count++;
  }
}

// Switch Case 
// syntax 
// switch(expression){
//   case expression1 :
//     code logic 
//     break;
//   case expression2 :
//     code logic
//     break;
//   default:
//     code logic 
// }

function find_weekday(){
  var value = prompt("Enter a number from 0 to 6");
  var day = parseInt(value);
  switch(day){
    case 0:
      console.log("Its Sunday");
      break;
    case 1:
      console.log("Its Monday");
      break;
    case 2:
      console.log("Its Tuesday");
      break;
    case 3:
      console.log("Its Wednesday");
      break;
    case 4:
      console.log("Its Thursday");
      break;
    case 5:
      console.log("Its Friday");
      break;
    case 6:
      console.log("Its Saturday");
      break;
    default:
      console.log("Wrong input, pls enter number from 0 to 6");
  }
}