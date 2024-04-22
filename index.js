"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function guessNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        let userInput = yield inquirer_1.default.prompt({
            type: 'number',
            name: 'guessedNumber',
            message: 'Guess a number between 1-4'
        });
        let guessedNumber = userInput.guessedNumber;
        if (guessedNumber === randomNumber) {
            console.log("Congratulations! You guessed the correct number.");
        }
        else {
            console.log(`Sorry, the correct number was ${randomNumber}.`);
        }
    });
}
guessNumber();
