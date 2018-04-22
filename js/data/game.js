export default {
  status: {
    notesLeft: 3,
    timeLeft: 300,
    started: false,
    currentQuestion: 0,
  },
  answers: [
    // {
    //   correct: true,
    //   time: 10
    // },
    // {
    //   correct: true,
    //   time: 20
    // }
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
  }
};
