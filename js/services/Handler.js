import { Hagman } from "./hangman.js";
import { Score } from "./score.js";
import { MatchValidator } from "./matchValidator.js";

const score = new Score();
const hangman = new Hagman();

export function inicialHandler(word) {
  const guessWordDiv = document.querySelector(".guess__word");
  const guessWord = word.split("");

  guessWord.forEach((character) => {
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
export function wordHandler(word) {
  const keyboard = document.querySelectorAll(".btn__kb");
  const guessWord = word.toUpperCase().split("");
  const matchValidator = new MatchValidator(word);
  keyboard.forEach((key) => {
    key.addEventListener("click", (event) => {
      if (guessWord.includes(event.target.innerText)) {
        key.style.backgroundColor = "#0ff180";

        guessWord.forEach((character, index) => {
          if (character === event.target.innerText) {
            renderHtmlHandler(character, index);
            matchValidator.validate();
          }
        });
      } else {
        key.style.backgroundColor = "#ff54cb";
        key.disabled = true;
        score.decrementByError();
        console.log(score.getPts());
        hangman.generateBody();
        matchValidator.validate();
      }
    });
  });
}

function renderHtmlHandler(character, index) {
  const guessLetters = document.querySelectorAll(".guess__letter");
  guessLetters[index].innerText = character;
}
