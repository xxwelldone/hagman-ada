let usedLetters = new Set();

export function checkLetter(letter, secretWord) {
  if (typeof letter !== 'string' || letter.length !== 1) {
    throw new Error('Entrada inválida: a letra deve ser um único caractere');
  }
  
  letter = letter.toUpperCase();
  
  if (usedLetters.has(letter)) {
    return false;
  }
  
  usedLetters.add(letter);
  const isCorrect = secretWord.includes(letter);
  renderUsedLetters();
  updateKeyboardUI(letter, isCorrect);
  
  return isCorrect;
}

function renderUsedLetters() {
  const usedLettersElement = document.getElementById('used-letters');
  if (usedLettersElement) {
    usedLettersElement.textContent = `Letras usadas: ${Array.from(usedLetters).join(', ')}`;
  }
}

function updateKeyboardUI(letter, isCorrect) {
  const keyboardButtons = document.querySelectorAll('.btn__kb');
  
  keyboardButtons.forEach(button => {
    if (button.textContent === letter) {
      button.style.backgroundColor = isCorrect ? 'var(--bright_green)' : 'var(--pink)';
      button.disabled = true;
    }
  });
}

export function resetUsedLetters() {
  usedLetters.clear();
  renderUsedLetters();
  
  const keyboardButtons = document.querySelectorAll('.btn__kb');
  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.style.backgroundColor = '';
  });
}

export function isLetterUsed(letter) {
  return usedLetters.has(letter.toUpperCase());
}

export function getUsedLetters() {
  return Array.from(usedLetters);
}
