"use strict";
const fs = require("fs");

/**
 * Synchronous Method
 * */

console.log('STARTED SYNC');
const files = fs.readdirSync("./");
console.log('Waiting for SYNC');
console.log(files);
console.log('FINISHED SYNC');


/**
 * ASynchronous Method
 * */
console.log('STARTED ASYNC');
fs.readdir("./", (err, files) => {
    if (err) {
        throw err;
        process.exit();
    };
    console.log("Async File read start.");
    console.log(files);
});
console.log('FINISHED ASYNC');
