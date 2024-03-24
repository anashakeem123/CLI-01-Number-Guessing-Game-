#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Generate a random number between 1 and 30
const computerGuess = Math.floor(Math.random() * 30 + 1);
const message = chalk.red.bgBlack.underline(
  "\n \t*Wellcome To Number Guessing Game*"
);
console.log(message);
const guessing = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: chalk.black.yellow.underline.italic(
      "\nPlease guess a number between 1 - 30: "
    ),
  },
]);
if (guessing.userGuessedNumber == Number) {
  console.log(chalk.black.bgYellow("\n*You Win!*"));
} else {
  console.log(chalk.black.bgGreen("\nPlease Try again!"));
}
