'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎈';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const secretNumber = () => Math.floor(Math.random() * 20); // Not sure cuase I wrote it as a function
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.score').value;
// console.log(document.querySelector('.score').value);
// console.log(score, typeof score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // if

  if (!guess) {
    // if the fiel is empty we get a 0 and 0 is a falsy value!
    document.querySelector('.message').textContent = 'No number! 😑';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Yes! 🎉';
    // else if
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 🚀';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose! 😱';

      document.querySelector('.score').textContent = 0;
    }
    // else if
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 🕸';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose! 😱';

      document.querySelector('.score').textContent = 0;
    }
  }
});
