import {assert} from 'chai';
import {getResults, getPoints, getFormattedWinMessage, MESSAGE_TIME_OUT, MESSAGE_NOTES_END} from './results.js';
import * as data from './results-data.js';

describe(`Points`, () => {
  it(`should return -1 when game is not completed`, () => {
    assert.equal(getPoints(data.answersLessThan10, 1), -1);
    assert.notEqual(getPoints(data.answersAll, 1), -1);
  });

  it(`should return 10 when all answer is true, but time is more than 30s`, () => {
    assert.equal(getPoints(data.answersAllRight, 3), 10);
  });

  it(`should return 20 when all answer is true and time is less than 30s`, () => {
    assert.equal(getPoints(data.answersAllRightTimeLessThan30, 3), 20);
  });
});

describe(`Results`, () => {
  it(`should return results`, () => {
    assert.equal(getResults(data.allPlayers, data.player1), getFormattedWinMessage(3, 9, 77));
  });

  it(`should return that time is up`, () => {
    assert.equal(getResults(data.allPlayers, data.player2), MESSAGE_TIME_OUT);
  });

  it(`should return that there are no lifes left`, () => {
    assert.equal(getResults(data.allPlayers, data.player3), MESSAGE_NOTES_END);
  });
});
