import status from '../templates/status.js';
import songs from '../data/songs.js';
import {QuestionTypes} from '../constants.js';


const makeDOMElement = (html) => {
  html = html.trim();
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content.firstChild;
};

const getRandomValue = (top) => {
  const value = parseInt(10 * Math.random(), 10) % top;
  return value;
};

const updateScreen = (screen) => {
  const appScreen = document.querySelector(`.app .main`);
  appScreen.innerHTML = ``;
  appScreen.appendChild(screen);

  if (screen.initScreen) {
    screen.initScreen();
  }
};

const renderStatus = (data) => {
  const statusContainer = document.querySelector(`.app .status`);
  statusContainer.innerHTML = status(data);
};

const humanityCount = (count, one, two, many) => {
  const check = (num) => count === num || (count > 20 && count.toString().endsWith(num));

  if (check(1)) {
    return one;
  }

  if (check(2) || check(3) || check(4)) {
    return two;
  }

  return many;
};

const shuffle = (arr) => {
  return [...arr].sort(() => Math.random() - Math.random());
};

const createRandomQuestion = () => {
  const type = Math.random() > 0.5 ? QuestionTypes.GENRE : QuestionTypes.ARTIST;
  const shuffledSongs = shuffle(songs);

  if (type === QuestionTypes.GENRE) {
    return {
      type: QuestionTypes.GENRE,
      genre: shuffledSongs[0].genre,
      options: shuffle([
        {
          url: shuffledSongs[0].src,
          correct: true
        },
        {
          url: shuffledSongs[1].src,
          correct: false
        },
        {
          url: shuffledSongs[2].src,
          correct: false
        },
        {
          url: shuffledSongs[3].src,
          correct: false
        }
      ])
    };
  } else {
    return {
      type: QuestionTypes.ARTIST,
      song: shuffledSongs[0].src,
      options: shuffle([
        {
          name: shuffledSongs[0].artist,
          pic: shuffledSongs[0].image,
          correct: true
        },
        {
          name: shuffledSongs[1].artist,
          pic: shuffledSongs[1].image,
          correct: false
        },
        {
          name: shuffledSongs[2].artist,
          pic: shuffledSongs[2].image,
          correct: false
        },
      ])
    };
  }
};

const answerQuestion = (answers, timeStarted, data) => {
  let question = data.questions[data.status.currentQuestion];
  data.status.currentQuestion += 1;
  let correct = true;
  answers.forEach((answer) => {
    if (
      (question.options[answer.value].correct && !answer.checked) ||
      (!question.options[answer.value].correct && answer.checked)
    ) {
      correct = false;
    }
  });
  if (!correct) {
    data.status.notesLeft -= 1;
  }
  let now = +new Date();
  data.answers.push({
    time: parseInt((now - timeStarted) / 1000, 10),
    correct
  });
  if ((data.status.notesLeft === 0) || (data.answers.length === data.questions.length)) {
    data.status.started = false;
  }
};


export {getRandomValue, makeDOMElement, updateScreen, humanityCount, renderStatus, createRandomQuestion, answerQuestion};
