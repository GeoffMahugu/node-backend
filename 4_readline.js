"use strict";
const readline = require("readline");
const { log } = require("util");

const questions = [
    "What\'s your favourite 🍦 flavour? ",
    "Are you a 🐶 or 🐱 person? ",
    "Which country would wou want to visit? "
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    };
    rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
    log("\n Thank you for answering \n");
    for (let i = 0; i < answers.length; i++) {
        log(`Q: ${questions[i]} \n A: ${answers[i]}\n`);
    }
    process.exit();
});