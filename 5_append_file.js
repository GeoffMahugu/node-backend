"use strict";
const fs = require("fs");

const currencies = require("./assets/currency.json");
const currLen = Object.keys(currencies).length;

const updatedCurr = Object.keys(currencies).map((key, index) => {
    const mappedCurr = {
        "index": index,
        "name": currencies[key].name,
        "symbol": currencies[key].symbol
    };
    let txtToWrite = `    ${JSON.stringify(mappedCurr)},`;
    if (index == 0) {
        txtToWrite = `{\n    ${JSON.stringify(mappedCurr)},`;
    } else if ((index + 1) == currLen) {
        txtToWrite = `    ${JSON.stringify(mappedCurr)},\n}`;
    }

    fs.appendFile('./storage/mapped_currency.json', txtToWrite, "utf8", err => {
        if (err) {
            throw err;
        }
        return mappedCurr;
    });

});