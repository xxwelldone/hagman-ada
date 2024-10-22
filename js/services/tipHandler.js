import { Score } from "./score.js";

let counter = 0;
const score = new Score();
export function tipHandler(apiTip) {
  const tip = document.querySelectorAll(".tip");
  tip.forEach((item) => {
    item.addEventListener("click", () => renderTip(apiTip));
  });
}
function renderTip(apiTip) {
  if (counter < 3) {
    const infosTips = document.querySelector(".infos");
    const infoType = document.createElement("p");
    infoType.setAttribute("class", "info-type");
    infoType.innerText = "Dica";

    const infoTip = document.createElement("div");
    let tip;
    if (counter === 2) {
      tip = document.createElement("img");
      tip.setAttribute("src", apiTip[counter]);
    } else {
      tip = document.createElement("p");
      tip.innerText = apiTip[counter];
    }
    infoTip.setAttribute("class", "info__tip --green");

    infoTip.append(tip);
    infosTips.append(infoType, infoTip);
    score.decrementByTip();
    console.log(score.getPts());

    counter++;
  } else {
    const modal = document.querySelector(".--warning-screen");
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
    }, 1000);
  }
}
