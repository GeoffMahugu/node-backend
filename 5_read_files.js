"use strict";
const fs = require("fs");

/**
 * Synchronous Method
 * */

const text = fs.readFileSync("./assets/reandom_read.txt", "utf8")
console.log(text);


/**
 * ASynchronous Method
 * */

fs.readFile("./assets/reandom_read.txt", "utf8", (err, text) => {
    if (err) {
        throw err;
        process.exit();
    };
    console.log(text);
});

/**
 * Read Binay Files
 * Remove encoding
 * */
fs.readFile("./assets/random_img.jpg", (err, text) => {
    if (err) {
        throw err;
        process.exit();
    };
    console.log(text);
});