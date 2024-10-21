let counter = 0;
export function tipHandler() {
  const tip = document.querySelectorAll(".tip");
  tip.forEach((item) => {
    item.addEventListener("click", renderTip);
  });
}
function renderTip(event) {
  if (counter < 3) {
    const infosTips = document.querySelector(".infos__tips");

    const infoType = document.createElement("p");
    infoType.setAttribute("class", "info-type");
    infoType.innerText = "Dica";

    const infoTip = document.createElement("div");
    const tip = document.createElement("p");

    infoTip.setAttribute("class", "info__tip --green");
    tip.innerText = "TESTE";

    infoTip.append(tip);
    infosTips.append(infoType, infoTip);
    counter++;
  } else {
    const modal = document.querySelector(".--warning-screen");
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
    }, 1000);
  }
}
