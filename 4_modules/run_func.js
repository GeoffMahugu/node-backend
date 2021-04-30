"use strict";
const { log } = require("util");
const { inc, dec, getCounter } = require('./func_file');

inc();
inc();
inc();
dec();
log(getCounter());