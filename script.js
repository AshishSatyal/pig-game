'use strict';

// selecting score elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('btn--hold');

diceEL.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// rolling dice
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
  //generating random number between 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    // switching to another player
  }
});
