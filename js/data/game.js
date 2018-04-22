import {DEFAULT_TIME_LEFT, QUESTIONS_COUNT} from '../constants.js';
import {createRandomQuestion} from '../utils/misc.js';

export default (defaults = {}) => {
  let data = {
    status: {
      notesLeft: 3,
      timeLeft: DEFAULT_TIME_LEFT,
      started: false,
      currentQuestion: 0,
    },
    answers: [
      // {
      //   correct: true,
      //   time: 10
      // },
    ],
    questions: [
      {
        type: `artist`,
        song: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        options: [
          {
            name: `Jingle Punks`,
            pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
            correct: true,
          },
          {
            name: `Kevin MacLeod`,
            pic: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
            correct: false
          },
          {
            name: `Riot`,
            pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
            correct: false
          }
        ]
      },
      {
        type: `genre`,
        genre: `jazz`,
        options: [
          {
            url: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
            correct: true
          },
          {
            url: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
            correct: false
          },
          {
            url: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
            correct: false
          }
        ]
      },
      {
        type: `artist`,
        song: `https://www.youtube.com/audiolibrary_download?vid=5a42aa8b33917180`,
        options: [
          {
            name: `Riot`,
            pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
            correct: false
          },
          {
            name: `Jingle Punks`,
            pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
            correct: false,
          },
          {
            name: `Biz Baz Studio`,
            pic: `https://i.ytimg.com/vi/NIjr-eZU82o/maxresdefault.jpg`,
            correct: true
          },
        ]
      },
    ],
    messages: {
      win: {
        title: `Вы настоящий меломан!`,
        description: ``
      },

      timeIsUp: {
        title: `Увы и ах!`,
        description: `Время вышло!<br>Вы не успели отгадать все мелодии`
      },

      noNotesLeft: {
        title: `Какая жалость!`,
        description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`
      }
    },
    allPlayers: [
      {
        points: 5,
        time: 15,
      },
      {
        points: 4,
        time: 25,
      },
    ]
  };
  if (defaults) {
    data = Object.assign(data, defaults);
  }

  if (data.questions.length < QUESTIONS_COUNT) {
    for (let i = data.questions.length; i <= QUESTIONS_COUNT; i++) {
      data.questions.push(createRandomQuestion());
    }
  }

  return data;
};
