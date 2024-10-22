import { Hagman } from "./hangman.js";
import { Score } from "./score.js";

export class MatchValidator {
  constructor(apiWord) {
    this.apiWord = apiWord.toUpperCase().split("");
  }
  apiWord;
  hangman = new Hagman();
  score = new Score();

  domLetters = document.querySelectorAll(".guess__letter");

  lettersValidated() {
    let state = false;
    for (let i = 0; i < this.apiWord.length; i++) {
      let letters = this.domLetters[i].innerText;

      if (letters === this.apiWord[i]) {
        state = true;
      } else {
        state = false;
      }
    }
    return state;
  }
  validate() {
    if (
      Hagman.counter < 6 &&
      this.score.getPts() !== 0 &&
      this.lettersValidated()
    ) {
      console.log("Jogou acabou, você ganhou");
    } else if (
      (Hagman.counter === 6 || this.score.getPts() === 0) &&
      !this.lettersValidated()
    ) {
      console.log("Perdeu");
    } else {
      console.log("Partida rolando");
    }
  }
}
