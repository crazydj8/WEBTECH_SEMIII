console.log("Hello world");

var mes = require("./message.js");
console.log(mes.message);

var op = require("./adder.js");
console.log("Sum of 30 and 20 is " + op.myadd(30, 20));
console.log("Sum of 30 and 20 is " + op.mysub(30, 20));