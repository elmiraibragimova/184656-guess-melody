import logo from './logo.js';
import welcome from './welcome.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';

export default (data) => {
  const html = makeDOMElement(`
    <section class="main main--result" data-order="4">

      ${logo()}

      <h2 class="title">${data.messages.timeIsUp.title}</h2>
      <div class="main-stat">Время вышло!<br>${data.messages.timeIsUp.description}</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </section>
  `);

  const replayButton = html.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => updateScreen(welcome));

  return html;
};
