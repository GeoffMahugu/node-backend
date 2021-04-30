"use strict";
const { log } = require("util");
const { inc, dec, getCounter } = require('./lib/func_file');

inc();
inc();
inc();
dec();
log(getCounter());