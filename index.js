"use strict";
// const path = require('path');
console.log('NODE START -----------/');
// console.log(`The file name is ${path.basename(__filename)}`);
// const [, , firstname, lastname] = process.argv;
// console.log(`FirstName: ${firstname} and LastName ${lastname}`);
// console.log(process.argv);


const grab = flag => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const firstName = grab('--firstName');
const lastName = grab('--lastName');

console.log(`FirstName: ${firstName} and LastName ${lastName}`);

