/*
 - It's time to "Guess the number"!!
 - The code certainly works.... but it breaks the DRY Principle 🤢
 - Refactor the code to follow the DRY Principle. Let's GO!
*/

const secretNum = 7;
let remainingGuesses = 3;

// NOT DRY
const playGuessingGame = () => {
  while (remainingGuesses) { // Loop while guesses remain
    let guess = prompt("Enter a number between 1-10: "); // Ask user for a guess
    guess = Number(guess); // Convert input to a number
    if (guess === secretNum) { // If guess is correct
      alert("You WON!"); // Notify user of win
      break; // Exit the loop
    }
    // Set message based on whether guess is too high or too low
    let message = guess > secretNum ? "Too high!" : "Too low!";
    remainingGuesses--; // Decrement guesses
    if (remainingGuesses === 0) { // If no guesses left
      alert(`You lost the game, the number was: ${secretNum}`); // Notify user of loss
      break; // Exit the loop
    }
    // Notify user of incorrect guess and remaining guesses
    alert(`${message} Remaining guesses: ${remainingGuesses}`);
  }
};

playGuessingGame();