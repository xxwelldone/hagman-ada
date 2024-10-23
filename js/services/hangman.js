export class Hagman {
  bodyParts = [
    "/assets/start/head.svg",
    "/assets/start/body.svg",
    "/assets/start/left arm.svg",
    "/assets/start/left leg.svg",
    "/assets/start/right arm.svg",
    "/assets/start/right leg.svg",
  ];
  static counter = 0;

  getCounter() {
    return Hagman.counter;
  }
  generateBody() {
    if (Hagman.counter < 6) {
      const hangman = document.querySelector(".hangman");
      const bodyPart = document.createElement("img");
      bodyPart.setAttribute("class", "hagman__body");
      bodyPart.setAttribute("src", this.bodyParts[Hagman.counter]);
      hangman.append(bodyPart);
      Hagman.counter++;
    }
  }
}
