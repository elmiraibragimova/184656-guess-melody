import welcomeScreen from './welcomeScreen.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';

// Результат игры: проигрыш закончились попытки
const countScreen = makeDOMElement(`
  <section class="main main--result" data-order="5">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const replayButton = countScreen.querySelector(`.main-replay`);
replayButton.addEventListener(`click`, () => updateScreen(welcomeScreen));

export default countScreen;
