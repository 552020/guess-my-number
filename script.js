'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //  Math.floor(Math.random() * 20);

let score = 20;
let highscore = 0;

document.querySelector('.score').value;

const play = function () {
  const guess = Number(document.querySelector('.guess').value);

  //*** if there is no input
  if (!guess) {
    // if the field is empty we get a 0 and 0 is a falsy value!
    document.querySelector('.message').textContent = 'No number! 😑';
    document.querySelector('.message').style.color = 'red';
    document.querySelector('.message').style.backgroundColor = 'yellow';
    document.querySelector('body').style.backgroundColor = 'pink';

    // If player wins
  } else if (guess === secretNumber) {
    score = document.querySelector('.score').textContent;

    document.querySelector('.message').textContent = 'Yes! 🎉';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // highscore: if version - a ternary version in the dirty file
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high! 🚀' : 'Too low! 🕸';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose! 😱';

      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', play);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') play();
});

const reset = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', reset);
