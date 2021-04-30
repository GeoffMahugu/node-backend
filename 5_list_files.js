"use strict";
const fs = require("fs");

// console.log('STARTED');
// const files = fs.readdirSync("./");
// console.log('Waiting for SYNC');
// console.log(files);
// console.log('FINISHED');

console.log('STARTED');
fs.readdir("./", (err, files) => {
    console.log("Async File read start.");
    console.log(files);
});
console.log('FINISHED');
