import logo from './logo.js';
import welcome from './welcome.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';

export default (data) => {
  const html = makeDOMElement(`
    <div>
      <h2 class="title">Какая жалость!</h2>
      <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </div>
  `);

  const replayButton = html.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => updateScreen(welcome));
};

