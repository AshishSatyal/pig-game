'use strict';

// selecting score elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('btn--hold');

diceEL.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;

// rolling dice
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
});
