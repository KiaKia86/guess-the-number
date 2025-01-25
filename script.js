// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM Elements
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

// Event Listener for Guess Button
guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (userGuess === targetNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
    feedback.style.color = '#00ff77';
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < targetNumber) {
    feedback.textContent = 'Too low! Try again.';
    feedback.style.color = '#ff0077';
  } else {
    feedback.textContent = 'Too high! Try again.';
    feedback.style.color = '#ff0077';
  }

  guessInput.value = '';
  guessInput.focus();
});