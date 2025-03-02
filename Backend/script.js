let a = 10;
let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("Hello " , args[i]);
}

let someValue = require("./math.js");
// console.log(someValue.sum(4,4));
// console.log(someValue.mul(4,4));
// console.log(someValue.pi);

let pruits = require("./fruits");
console.log(pruits[1].color);