import {humanityCount} from './../utils/misc.js';

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

const getFormattedWinMessage = (place, players, percents) => {
  const playersCountLabel = humanityCount(players, `игрока`, `игроков`, `игроков`);
  return `Вы заняли ${place} место из ${players} ${playersCountLabel}. Это лучше, чем у ${Math.trunc(percents)}% игроков`;
};

const getResults = (allPlayers, player) => {
  if (player.time === 0) {
    return MESSAGE_TIME_OUT;
  }

  if (player.notes === 0) {
    return MESSAGE_NOTES_END;
  }

  allPlayers.push(player.points);
  const sortedPlayers = allPlayers.sort((firstPlayer, secondPlayer) => secondPlayer - firstPlayer);
  const place = sortedPlayers.indexOf(player.points);
  const allPlayersCount = allPlayers.length;
  const lessSuccessPlayersPercents = ((allPlayersCount - place) / allPlayersCount) * 100;

  return getFormattedWinMessage(place + 1, allPlayers.length, lessSuccessPlayersPercents);
};

export {getResults, getPoints, getFormattedWinMessage, MESSAGE_TIME_OUT, MESSAGE_NOTES_END};
