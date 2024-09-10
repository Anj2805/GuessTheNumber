// script.js

document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    let attempts = 0;
  
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
  
    guessButton.addEventListener('click', () => {
      const userGuess = parseInt(guessInput.value);
      attempts++;
  
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100!';
        return;
      }
  
      if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        message.style.color = 'green';
        guessButton.disabled = true; // Disable the button after correct guess
      } else if (userGuess < randomNumber) {
        message.textContent = 'Try a higher number!';
        message.style.color = 'orange';
      } else {
        message.textContent = 'Try a lower number!';
        message.style.color = 'orange';
      }
  
      attemptsDisplay.textContent = `Attempts: ${attempts}`;
    });
  });
  