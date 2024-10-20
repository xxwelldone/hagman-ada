export function inicialHandler(word) {
  const guessWordDiv = document.querySelector(".guess__word");
  const guessWord = word.replace(" ", "").split("");

  guessWord.forEach((i) => {
    let emptySpace = document.createElement("span");
    emptySpace.innerText = "-";
    emptySpace.setAttribute("class", "guess__letter");
    guessWordDiv.appendChild(emptySpace);
  });
}
export function wordHandler(word) {
  const keyboard = document.querySelectorAll(".btn__kb");
  const guessWord = word.replace(" ", "").toUpperCase().split("");

  keyboard.forEach((key) => {
    key.addEventListener("click", (event) => {
      if (guessWord.includes(event.target.innerText)) {
        guessWord.forEach((character, index) => {
          if (character === event.target.innerText) {
            renderHtmlHandler(character, index);
          }
        });
      }
    });
  });
}

function renderHtmlHandler(character, index) {
  const guessLetters = document.querySelectorAll(".guess__letter");
  guessLetters[index].innerText = character;
}
