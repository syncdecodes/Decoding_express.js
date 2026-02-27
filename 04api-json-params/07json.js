// JSON - javascript object notation -:
/* 
JSON (JavaScript Object Notation) is a lightweight, text-based data format used to exchange data between a web application and a server. 
JavaScript's JSON object provides two primary methods for converting between JavaScript objects and JSON strings: 
JSON.parse(): Converts a JSON string into a native JavaScript object, allowing you to access and use the data within your program.
JSON.stringify(): Converts a JavaScript object or value into a JSON-formatted string, which is necessary when sending data to a server or storing it.
*/

// A JavaScript string containing JSON data
const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Converting a JSON string to a JavaScript object
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name); // Output: John

// Converting a JavaScript object to a JSON string
const jsObject = { name: "Alice", age: 30, city: "New York" };
const newJsonString = JSON.stringify(jsObject);
console.log(newJsonString); // Output: {"name":"Alice","age":30,"city":"New York"}

/*
While JSON syntax looks similar to JavaScript object literals, there are strict differences -: 
=> Keys must be double-quoted in JSON
=> Functions/methods are not allowed as values in JSON.
=> JSON cannot contain undefined, NaN, Infinity, or comments.
=> JSON is a data format (text only) used for data exchange
*/