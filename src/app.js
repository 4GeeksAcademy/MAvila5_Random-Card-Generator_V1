import "bootstrap";
import "./style.css";


document.addEventListener('DOMContentLoaded', function () {
  const suits = ['♥', '♠', '♣', '♦'];
  const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function generateRandomSuit() {
    return getRandomElement(suits);
  }

  function generateRandomValue() {
    return getRandomElement(cardValues);
  }

  function generateRandomCard() {
    const randomSuit = generateRandomSuit();
    const randomValue = generateRandomValue();

    document.querySelector('.topSuite').textContent = randomSuit;
    document.querySelector('.number').textContent = randomValue;
    document.querySelector('.bottomSuite').textContent = randomSuit;
  }

  // Run the function on page load
  document.addEventListener('DOMContentLoaded', generateRandomCard);

  // Bind the button click to generate a new card
  document.querySelector('.btn').addEventListener('click', generateRandomCard);
});

