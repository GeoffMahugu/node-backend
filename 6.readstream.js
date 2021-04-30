"use strict";
const fs = require("fs");

const readStream = fs.createReadStream("./assets/reandom_read.txt", "utf8");

// This reads a snippet of the file
readStream.once("data", data => {
    console.log(data);
});

console.log('READ SNIPPET ----------------------------')


// Reads whole file in chunks
readStream.on("data", data => {
    console.log(data);
});

// Reads whole file in chunks
readStream.on("end", data => {
    console.log("Finished reading file");
});
