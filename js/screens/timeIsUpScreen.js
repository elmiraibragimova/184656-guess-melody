import welcomeScreen from './welcomeScreen.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';

// Результат игры: проигрыш время вышло
const timeIsUpScreen = makeDOMElement(`
  <section class="main main--result" data-order="4">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const replayButton = timeIsUpScreen.querySelector(`.main-replay`);
replayButton.addEventListener(`click`, () => updateScreen(welcomeScreen));

export default timeIsUpScreen;
