"use strict";
const { EventEmitter } = require("events");
const { log } = require("util");

const emitter = new EventEmitter();

emitter.on("customEvent", (message, user) => {
    log(`User: ${user} performed => ${message}\n`);
});

process.stdout.write('\n To Exit: Type exit.');

process.stdout.write('\n Type some process...\n\n');

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input == "exit") {
        emitter.emit("customEvent", "Goodbye", "Exit-Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "Terminal");
})