import {makeDOMElement, updateScreen} from './../utils/misc.js';
import Timer from './../utils/timer.js';
import logo from './logo.js';
import question from './question.js';

export default (data) => {
  const html = makeDOMElement(`
    <section class="main main--welcome" data-order="0">

      ${logo()}

      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
        Ошибиться можно 3 раза.<br>
        Удачи!
      </p>
    </section>
  `);

  const play = html.querySelector(`.main-play`);
  play.addEventListener(`click`, () => {
    data.status.started = true;

    let updateTimeLeftTimer = new Timer(data.status.timeLeft);
    updateTimeLeftTimer.onTick = () => {
      if (!data.status.timeLeft) {
        data.status.started = false;
      }
      data.status.timeLeft -= 1;
    };
    updateTimeLeftTimer.tick();

    updateScreen(question(data));
  });
  return html;
};

