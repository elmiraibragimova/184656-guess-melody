import artistScreen from './artistScreen.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';

const welcomeScreen = makeDOMElement(`
  <section class="main main--welcome" data-order="0">
    <section class="logo" title="Угадай мелодию">
      <h1>Угадай мелодию</h1>
    </section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>
`);

const play = welcomeScreen.querySelector(`.main-play`);
play.addEventListener(`click`, () => updateScreen(artistScreen));

export default welcomeScreen;
