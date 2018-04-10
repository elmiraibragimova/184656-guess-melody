const MESSAGE_TIME_OUT = `Время вышло! Вы не успели отгадать все мелодии`;
const MESSAGE_NOTES_END = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;

const getPoints = (answers, leftNotes) => {
  if (answers.length < 10) {
    return -1;
  }

  let points = 0;

  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time < 30) {
        points += 2;
      } else {
        points += 1;
      }
    }
  });

  points = points - (3 - leftNotes) * 2;

  return points;
};

const getFormattedWinMessage = (place, players, percents) => {
  return `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${Math.trunc(percents)}% игроков`;
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
