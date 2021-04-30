"use strict";
const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/writestream.txt", "utf8");

/**
 * This will open a stram and write to ./assets/writestream.txt
 * To maintain the stream remove process.exit();
 * */

// console.log("Start to type");
// process.stdin.on("data", data => {
//     writeStream.write(data);
//     // process.exit();
// });

/**
  * Combine readStream and WriteStream
  * */

const readStream = fs.createReadStream("./assets/random_read_chapter_2.txt", "utf8");
readStream.on("data", data => {
    writeStream.write(data);
});