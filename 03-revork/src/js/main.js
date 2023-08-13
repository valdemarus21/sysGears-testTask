import { startGame, stopGame } from './game.js';
import { handleAddButtonClick } from './addButton.js';
import { handleAddBlockButtonClick } from './addBlockButton.js';


export const genResultBtn = document.getElementById('generate');
export const startBtn = document.querySelector('#start-btn');
export const stopBtn = document.querySelector('#stop-btn');

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);

const addButton = document.querySelector('.query-block__input-btn');
addButton.addEventListener('click', handleAddButtonClick);

const addBlockButton = document.querySelector('.query-block__inputs-zond-add');
addBlockButton.addEventListener('click', handleAddBlockButtonClick);
