export default function menuMobile() {
  const navbarBtn = document.querySelector(".navbar__btn");
  navbarBtn.addEventListener("pointerdown", openCloseMenu);
}
function openCloseMenu(event) {
  const modal = document.querySelector("dialog");

  if (modal.open != true) {
    modal.show();
  } else {
    console.log("entrou");

    modal.close();
  }
}
