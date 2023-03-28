console.log("hello world");

//------addition function -------------
var a = 20 ;
var b = 30 ;
var c = a + b ;
console.log (`Addtion of ${a} + ${b} = ${c}`);

//--------text file create--------------

const fs = require("fs");

fs.writeFileSync("text01" , "this is a text file from node.js");

fs.writeFileSync("text02" , "Hello my name is Himanshi jangid");

