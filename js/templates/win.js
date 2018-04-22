// import welcome from './welcome.js';
import {getResults, getPoints, getFastAnswersCount, getFormattedTime} from './../utils/results.js';
import {humanityCount} from '../utils/misc.js';

export default (data) => {
  const points = getPoints(data.answers, data.status.notesLeft);
  const fastAnswers = getFastAnswersCount(data.answers);
  const mistakes = data.answers.filter((answer) => !answer.correct).length;
  const html = `
    <div>
      <h2 class="title">${data.messages.win.title}</h2>
      <div class="main-stat">За ${getFormattedTime(data.status.timeLeft)}
        <br>вы&nbsp;набрали ${points} баллов (${fastAnswers} быстрых)
        <br>совершив ${mistakes} ${humanityCount(mistakes, `ошибку`, `ошибки`, `ошибок`)}
      </div>
      <span class="main-comparison">${getResults(data)}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </div>
  `;

  return html;
};
