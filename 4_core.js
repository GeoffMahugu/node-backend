"use strict";
const path = require("path");
const util = require("util");
const v8 = require("v8");

const getPath = path.join(__dirname, "www");

util.log('Util Logs returns date time ref.');
util.log(getPath);
util.log('Log v8 Heap Statistics');
util.log(v8.getHeapStatistics());

