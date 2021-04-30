"use strict";
const fs = require("fs");

if (fs.existsSync("storage")) {
    console.log("Directory Exists already.")
} else {
    fs.mkdir("storage", err => {
        if (err) {
            throw err;
            process.exit();
        };
        console.log("Done: Created Directory");
    })
}
