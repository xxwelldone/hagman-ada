import { Hagman } from "./hangman.js";
import { Score } from "./score.js";
import { MatchValidator } from "./matchValidator.js";

export class WordHandler {
  constructor(word) {
    this.guessWord = word.toUpperCase().split("");
    this.matchValidator = new MatchValidator(word);
    this.score = new Score();
    this.hangman = new Hagman();
  }

  hideWord() {
    const guessWordDiv = document.querySelector(".guess__word");

    this.guessWord.forEach((character) => {
      let emptySpace = document.createElement("span");
      if (character === " ") {
        emptySpace.innerText = " ";
        emptySpace.style.backgroundColor = "transparent";
      } else {
        emptySpace.innerText = "-";
      }
      emptySpace.setAttribute("class", "guess__letter");
      guessWordDiv.appendChild(emptySpace);
    });
  }
  validateCharacter() {
    const keyboard = document.querySelectorAll(".btn__kb");

    keyboard.forEach((key) => {
      key.addEventListener("click", (event) => {
        if (this.guessWord.includes(event.target.innerText)) {
          key.style.backgroundColor = "#0ff180";

          this.guessWord.forEach((character, index) => {
            if (character === event.target.innerText) {
              this.displayCharacter(character, index);
              this.matchValidator.validateMatch();
            }
          });
        } else {
          key.style.backgroundColor = "#ff54cb";
          key.disabled = true;
          this.score.decrementByError();
          this.hangman.generateBody();
          this.matchValidator.validateMatch();
        }
      });
    });
  }

  displayCharacter(character, index) {
    const guessLetters = document.querySelectorAll(".guess__letter");
    guessLetters[index].innerText = character;
  }
}
