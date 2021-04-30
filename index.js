"use strict";
const path = require('path');
console.log('NODE START -----------/');
console.log(`The file name is ${path.basename(__filename)}`);
const [, , firstname, lastname] = process.argv;
console.log(`FirstName: ${firstname} and LastName ${lastname}`);
console.log(process.argv);

