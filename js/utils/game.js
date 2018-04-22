import gameInitialGameData from '../data/game.js';
import {updateScreen, renderStatus} from './misc.js';
import welcome from '../templates/welcome.js';

let statusInterval;

export const startGame = (defaults) => {
  const gameData = gameInitialGameData(defaults);
  updateScreen(welcome(gameData));
  clearInterval(statusInterval);
  statusInterval = setInterval(() => renderStatus(gameData.status), 1000);
};
