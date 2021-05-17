'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //  Math.floor(Math.random() * 20);

let score = 20;
let highscore = 0;

let messageDom = document.querySelector('.message');
let scoreDom = document.querySelector('.score');
let numberDom = document.querySelector('.number');

const play = function () {
  const guess = Number(document.querySelector('.guess').value);

  //*** if there is no input
  if (!guess) {
    // if the field is empty we get a 0 and 0 is a falsy value!
    messageDom.textContent = 'No number! 😑';
    messageDom.style.color = 'red';
    messageDom.style.backgroundColor = 'yellow';
    document.querySelector('body').style.backgroundColor = 'pink';

    // If player wins
  } else if (guess === secretNumber) {
    score = scoreDom.textContent;

    messageDom.textContent = 'Yes! 🎉';
    document.querySelector('body').style.backgroundColor = 'red';
    numberDom.style.width = '30rem';
    numberDom.textContent = secretNumber;
    // highscore: if version - a ternary version in the dirty file
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDom.textContent =
        guess > secretNumber ? 'Too high! 🚀' : 'Too low! 🕸';
      score--;
      scoreDom.textContent = score;
    } else {
      messageDom.textContent = 'You loose! 😱';

      scoreDom.textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', play);
document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') play();
});

const reset = function () {
  score = 20;
  scoreDom.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageDom.textContent = 'Start guessing...';
  numberDom.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  numberDom.style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', reset);
