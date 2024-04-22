#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { name: "firstNumber", type: "number", message: "Enter first number\n" },
    { name: "secondNumber", type: "number", message: "Enter second number:\n" },
    {
        name: "operator",
        type: "list",
        message: "Select Operator?\n",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
console.log("Your answer is:");
if (answer.operator == "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Kindly choose the correct operator");
}
