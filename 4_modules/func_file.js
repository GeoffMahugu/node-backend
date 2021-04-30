"use strict";
let counter = 0;

const inc = () => ++counter;
const dec = () => --counter;
const getCounter = () => counter;

module.exports = {
    inc,
    dec,
    getCounter
}