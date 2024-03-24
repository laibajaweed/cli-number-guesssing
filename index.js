#! /usr/bin/env node
import inquirer from "inquirer";
// 1  computer will generate a random number
// 2 user input for guessing number
// 3 step  compare user input with computer generated number and show result
console.log("\n\twellcome to code laiba CLI Nmber Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "pleas guess a number between 1-10:",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
