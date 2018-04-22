import {makeDOMElement, updateScreen, answerQuestion} from './../utils/misc.js';
import questionTemplate from './question';

export default (data) => {
  let question = data.questions[data.status.currentQuestion];
  let now = parseInt(new Date(), 10);
  const html = makeDOMElement(`
    <section class="main main--level main--level-artist" data-order="1">
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${question.song}" autoplay></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
        ${question.options.map((artist, index) => (`
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}"/>
            <label class="main-answer" for="answer-${index}">
              <img class="main-answer-preview" src="${artist.pic}"
                  alt="${artist.name}" width="134" height="134">
              ${artist.name}
            </label>
          </div>
        `)).join(`\n`)}
        </form>
      </div>
    </section>
  `);

  const form = html.querySelector(`.main-list`);
  const answers = [...form.querySelectorAll(`input`)];

  form.addEventListener(`click`, function (event) {
    const isRadioButton = event.target.classList.contains(`main-answer-r`);
    if (isRadioButton) {
      answerQuestion(answers, now, data);
      updateScreen(questionTemplate(data));
    }
  });

  return html;
};
