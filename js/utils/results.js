import {humanityCount} from '../utils/misc.js';
import {DEFAULT_TIME_LEFT, FAST_ANSWER_TIME} from '../constants.js';

const MESSAGE_TIME_OUT = `Время вышло! Вы не успели отгадать все мелодии`;
const MESSAGE_NOTES_END = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
const MAX_NUMBER_OF_QUESTIONS = 10;
const MAX_NUMBER_OF_NOTES = 3;

const Points = {
  FAST_RIGHT_ANSWER: 2,
  RIGHT_ANSWER: 1,
  WRONG_ANSWER: 2
};

const getPoints = (answers, leftNotes) => {
  if (answers.length < MAX_NUMBER_OF_QUESTIONS) {
    return -1;
  }

  let points = 0;

  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time < 30) {
        points += Points.FAST_RIGHT_ANSWER;
      } else {
        points += Points.RIGHT_ANSWER;
      }
    }
  });

  points = points - (MAX_NUMBER_OF_NOTES - leftNotes) * Points.WRONG_ANSWER;

  return points;
};

const getFastAnswersCount = (answers) => {
  return answers.filter((answer) => answer.time < FAST_ANSWER_TIME).length;
};

const getFormattedTime = (timeLeft) => {
  const time = DEFAULT_TIME_LEFT - timeLeft;
  const minutes = parseInt(time / 60, 10);
  const seconds = parseInt(time % 60, 10);
  return `${minutes} ${humanityCount(minutes, `минуту`, `минуты`, `минут`)} и ${seconds} ${humanityCount(seconds, `секунду`, `секунды`, `секунд`)}`;
};

const getFormattedWinMessage = (place, players, percents) => {
  const playersCountLabel = humanityCount(players, `игрока`, `игроков`, `игроков`);
  return `Вы заняли ${place} место из ${players} ${playersCountLabel}. Это лучше, чем у ${Math.trunc(percents)}% игроков`;
};

const savePlayer = (data) => {
  let player = {
    points: getPoints(data.answers, data.status.notesLeft),
    time: DEFAULT_TIME_LEFT - data.status.timeLeft,
  };
  data.allPlayers.push(player);
  data.player = player;
  return player;
};


const getResults = (data) => {
  if (data.status.timeLeft === 0) {
    return MESSAGE_TIME_OUT;
  }

  if (data.status.notesLeft === 0) {
    return MESSAGE_NOTES_END;
  }

  const sortedPlayers = data.allPlayers.sort((firstPlayer, secondPlayer) => secondPlayer.points - firstPlayer.points);
  const place = sortedPlayers.map((p) => p.points).indexOf(data.player.points);
  const allPlayersCount = data.allPlayers.length;
  const lessSuccessPlayersPercents = ((allPlayersCount - place) / allPlayersCount) * 100;

  return getFormattedWinMessage(place + 1, data.allPlayers.length, lessSuccessPlayersPercents);
};

export {getResults, getPoints, getFormattedWinMessage, MESSAGE_TIME_OUT, MESSAGE_NOTES_END, MAX_NUMBER_OF_NOTES, getFastAnswersCount, getFormattedTime, savePlayer};
