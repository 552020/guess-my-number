'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎈';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // if the fiel is empty we get a 0 and 0 is a falsy value!
    document.querySelector('.message').textContent = 'No number! 😑';
  }
});
