"use strict";

process.stdout.write(`\n\n Hello, what's your name 😊\n\n`);

process.stdin.on('data', data => {
    process.stdout.write(`\n\n Hi ${data.toString().trim()} 😊, i'm Robbo X 🤖\n\n`);
    process.exit();
});