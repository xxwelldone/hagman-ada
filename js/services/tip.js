import { Score } from "./score.js";

export class Tip {
  constructor(apiTip) {
    this.counter = 0;
    this.score = new Score();
    this.apiTip = apiTip;
  }
  tipHandler() {
    const tip = document.querySelectorAll(".tip");
    tip.forEach((item) => {
      item.addEventListener("click", () => this.renderTip());
    });
  }
  renderTip() {
    if (this.counter < 3) {
      const infosTips = document.querySelector(".infos");
      const infoType = document.createElement("p");
      infoType.setAttribute("class", "info-type");
      infoType.innerText = "Dica";

      const infoTip = document.createElement("div");
      let tip;
      if (this.counter === 2) {
        tip = document.createElement("img");
        tip.setAttribute("src", this.apiTip[this.counter]);
      } else {
        tip = document.createElement("p");
        tip.innerText = this.apiTip[this.counter];
      }
      infoTip.setAttribute("class", "info__tip --green");

      infoTip.append(tip);
      infosTips.append(infoType, infoTip);
      this.score.decrementByTip();

      this.counter++;
    } else {
      const modal = document.querySelector(".--warning-screen");
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.display = "none";
      }, 1000);
    }
  }
}
