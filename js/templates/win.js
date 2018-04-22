import welcome from './welcome.js';
import {makeDOMElement, updateScreen} from './../utils/misc.js';
import {getResults, getPoints} from './../utils/results.js';

export default (data) => {
  const html = makeDOMElement(`
    <div>
      <h2 class="title">${data.messages.win.title}</h2>

      <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
        <br>вы&nbsp;набрали 12 баллов (8 быстрых)
        <br>совершив 3 ошибки
      </div>


      <span class="main-comparison">${getResults(data.allPlayers, data.player)}</span>

      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </div>
  `);

  const replayButton = html.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => updateScreen(welcome));

  return html;
};











// import logo from './logo.js';
// import welcome from './welcome.js';
// import {makeDOMElement, updateScreen} from './../utils/misc.js';

// export default (data) => {
//   const html = makeDOMElement(`
//     <div>
//       <h2 class="title">Вы настоящий меломан!</h2>

//       <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
//         <br>вы&nbsp;набрали 12 баллов (8 быстрых)
//         <br>совершив 3 ошибки</div>


//       <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
//       <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
//     </div>
//   `);

//   const replayButton = html.querySelector(`.main-replay`);
//   replayButton.addEventListener(`click`, () => updateScreen(welcome));

//   return html;
// };
