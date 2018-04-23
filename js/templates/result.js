import logo from './logo.js';
import fail from './fail.js';
import win from './win.js';
import {makeDOMElement} from '../utils/misc.js';
import {savePlayer} from '../utils/results.js';
import {startGame} from '../utils/game.js';

export default (data) => {
  let results;
  savePlayer(data);

  if (data.status.notesLeft === 0) {
    results = fail(data.messages.noNotesLeft);
  } else if (data.status.timeLeft === 0) {
    results = fail(data.messages.timeIsUp);
  } else if (data.answers.length === data.questions.length) {
    results = win(data);
  }

  const html = makeDOMElement(`
    <section class="main main--result">
      ${logo()}
      ${results}
    </section>
  `);

  html.querySelector(`.main-replay`).addEventListener(`click`, () => {
    startGame({
      allPlayers: data.allPlayers,
    });
  });

  return html;
};

