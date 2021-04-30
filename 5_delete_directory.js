"use strict";
const fs = require("fs");

fs.readdirSync("./storage/").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
    console.log("Deleted all files in Storage")
});

fs.rmdir("./storage/", err => {
    if (err) {
        throw err;
    }
    console.log("Deleted Storage Directory")
});