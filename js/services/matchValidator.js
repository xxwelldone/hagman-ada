import { Hagman } from "./hangman.js";
import { Score } from "./score.js";

export class MatchValidator {
  constructor(apiWord) {
    this.apiWord = apiWord.toUpperCase().split("");
    this.hangman = new Hagman();
    this.score = new Score();
    this.win = document.querySelector(".final__message__victory");
    this.lose = document.querySelector(".final__message__lose");
    this.match = document.querySelector(".match");
    this.bodyHangman = document.querySelector(".hangman");
    this.arrImg = { lose: "/assets/morto.svg", win: "/assets/vivo.svg" };
  }

  validatePerCharacter() {
    const domLetters = document.querySelectorAll(".guess__letter");
    let state = false;

    for (let i = 0; i < this.apiWord.length; i++) {
      let letters = domLetters[i].innerText;
      console.log("verificar:", letters, this.apiWord[i]);

      if (letters === this.apiWord[i]) {
        state = true;
      } else {
        state = false;
      }
    }
    return state;
  }
  validateMatch() {
    if (
      this.hangman.getCounter() < 6 &&
      this.score.getPts() !== 0 &&
      this.validatePerCharacter()
    ) {
      console.log("hangman.getCounter", this.hangman.getCounter());
      console.log("score.getPts", this.score.getPts());
      console.log("validatePerCharacter", this.validatePerCharacter());

      this.win.style.display = "flex";
      this.bodyHangman.style.display = "none";
      this.match.innerHTML = `<img src="${this.arrImg.win}" alt="" srcset="">`;
    } else if (
      (Hagman.counter === 6 || this.score.getPts() === 0) &&
      !this.validatePerCharacter()
    ) {
      console.log("hangman.getCounter", this.hangman.getCounter());
      console.log("score.getPts", this.score.getPts());
      console.log("validatePerCharacter", this.validatePerCharacter());
      this.lose.style.display = "flex";
      this.bodyHangman.style.display = "none";
      this.match.innerHTML = `<img src="${this.arrImg.lose}" alt="" srcset="">`;
    }
  }
}
