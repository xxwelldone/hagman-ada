export const usedLettersHandler = new UsedLettersHandler();

class UsedLettersHandler {
    constructor() {
      this.usedLetters = new Set();
    }
  
    checkLetter(letter, secretWord) {
      if (typeof letter !== 'string' || letter.length !== 1) {
        throw new Error('Entrada inválida: a letra deve ser um único caractere');
      }
      
      letter = letter.toUpperCase();
      
      if (this.usedLetters.has(letter)) {
        return false;
      }
      
      this.usedLetters.add(letter);
      const isCorrect = secretWord.includes(letter);
      this.renderUsedLetters();
      this.updateKeyboardUI(letter, isCorrect);
      
      return isCorrect;
    }
  
    renderUsedLetters() {
      const usedLettersElement = document.getElementById('used-letters');
      if (usedLettersElement) {
        usedLettersElement.textContent = `Letras usadas: ${Array.from(this.usedLetters).join(', ')}`;
      }
    }
  
    updateKeyboardUI(letter, isCorrect) {
      const keyboardButtons = document.querySelectorAll('.btn__kb');
      
      keyboardButtons.forEach(button => {
        if (button.textContent === letter) {
          button.style.backgroundColor = isCorrect ? 'var(--bright_green)' : 'var(--pink)';
          button.disabled = true;
        }
      });
    }
  
    resetUsedLetters() {
      this.usedLetters.clear();
      this.renderUsedLetters();
      
      const keyboardButtons = document.querySelectorAll('.btn__kb');
      keyboardButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = '';
      });
    }
  
    isLetterUsed(letter) {
      return this.usedLetters.has(letter.toUpperCase());
    }
  
    getUsedLetters() {
      return Array.from(this.usedLetters);
    }
  }
