import welcome from './templates/welcome.js';
import {updateScreen, renderStatus, createRandomQuestion} from './utils/misc.js';
import gameData from './data/game.js';
import {QUESTIONS_COUNT} from './constants.js';


if (gameData.questions.length < QUESTIONS_COUNT) {
  for (let i = gameData.questions.length; i <= QUESTIONS_COUNT; i++) {
    gameData.questions.push(createRandomQuestion());
  }
}
updateScreen(welcome(gameData));
setInterval(() => renderStatus(gameData.status), 1000);
