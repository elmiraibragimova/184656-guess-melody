import genre from './genre.js';
import artist from './artist.js';
import result from './result.js';
import {QuestionTypes} from '../constants.js';

export default (data) => {
  let question = data.questions[data.status.currentQuestion];
  let template;
  if (!data.status.started) {
    template = result;
  } else if (question.type === QuestionTypes.ARTIST) {
    template = artist;
  } else if (question.type === QuestionTypes.GENRE) {
    template = genre;
  }

  return template(data);
};
