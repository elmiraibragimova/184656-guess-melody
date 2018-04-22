import genre from './genre.js';
import artist from './artist.js';
import fail from './fail.js';
import win from './win.js';
import {QuestionTypes} from '../constants.js';

export default (data) => {
  let question = data.questions[data.status.currentQuestion];
  let template;
  if (data.status.notesLeft === 0) {
    return fail(data.messages.noNotesLeft);
  } else if (data.status.timeLeft === 0) {
    return fail(data.messages.timeIsUp);
  } else if (data.answers.length === data.questions) {
    template = win;
  } else if (question.type === QuestionTypes.ARTIST) {
    template = artist;
  } else if (question.type === QuestionTypes.GENRE) {
    template = genre;
  }

  return template(data);
};
