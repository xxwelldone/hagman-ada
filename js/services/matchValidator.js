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
  win = document.querySelector(".final__message__victory");
  lose = document.querySelector(".final__message__lose");
  match = document.querySelector(".match");
  bodyHangman = document.querySelector(".hangman");
  arrImg = { lose: "/assets/morto.svg", win: "/assets/vivo.svg" };

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
      this.win.style.display = "flex";
      this.bodyHangman.style.display = "none";
      this.match.innerHTML = `<img src="${this.arrImg.win}" alt="" srcset="">`;
    } else if (
      (Hagman.counter === 6 || this.score.getPts() === 0) &&
      !this.lettersValidated()
    ) {
      this.lose.style.display = "flex";
      this.bodyHangman.style.display = "none";
      this.match.innerHTML = `<img src="${this.arrImg.lose}" alt="" srcset="">`;
    } else {
      console.log("Partida rolando");
    }
  }
}
