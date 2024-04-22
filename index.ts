import inquirer from "inquirer";

async function guessNumber() {
    let randomNumber: number = Math.floor(Math.random() * 4) + 1;

    let userInput = await inquirer.prompt({
        type: 'number',
        name: 'guessedNumber',
        message: 'Guess a number between 1-4'
    });

    let guessedNumber = userInput.guessedNumber;

    if (guessedNumber === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log(`Sorry, the correct number was ${randomNumber}.`);
    }
}

guessNumber();

