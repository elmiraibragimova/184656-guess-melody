import {makeDOMElement, updateScreen, answerQuestion} from './../utils/misc.js';
import questionTemplate from './question';


export default (data) => {
  let question = data.questions[data.status.currentQuestion];
  let now = parseInt(new Date(), 10);
  const html = makeDOMElement(`
    <section class="main main--level main--level-artist" data-order="1">
      <div class="main-wrap">
        <h2 class="title">Выберите ${question.genre} треки</h2>
        <form class="genre">

          ${question.options.map((song, index) => (`
            <div class="genre-answer">
              <div class="player-wrapper">
                <div class="player">
                  <audio src="${song.url}"></audio>
                  <button class="player-control player-control--pause"></button>
                  <div class="player-track">
                    <span class="player-status"></span>
                  </div>
                </div>
              </div>
              <input type="checkbox" name="answer" value="${index}" id="a-${index}">
              <label class="genre-answer-check" for="a-${index}"></label>
            </div>
          `))}

          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>
    </section>
  `);

  const submitButton = html.querySelector(`.genre-answer-send`);
  const answers = [...html.querySelectorAll(`input[type="checkbox"]`)];

  // изменится ли доступ к переменной initScreen?
  html.initScreen = () => {
    submitButton.disabled = true;
    answers.forEach((answer) => {
      answer.checked = false;
    });
  };

  submitButton.addEventListener(`click`, () => {
    answerQuestion(answers, now, data);
    updateScreen(questionTemplate(data));
  });
  answers.forEach((answer) => {
    answer.addEventListener(`change`, () => {
      let isChecked = answers.some((a) => a.checked);
      submitButton.disabled = !isChecked;
    });
  });

  return html;
};
