import {assert} from 'chai';
import {getResults, getPoints, getFormattedWinMessage, MESSAGE_TIME_OUT, MESSAGE_NOTES_END} from './results.js';
import * as data from './results-data.js';

describe(`Points`, () => {
  it(`should return -1 when game is not completed`, () => {
    assert.equal(getPoints(data.answersLessThan10, 1), -1);
    assert.notEqual(getPoints(data.answersAll, 1), -1);
  });

  it(`should return 10 when all answers are true, but time is more than 30s`, () => {
    assert.equal(getPoints(data.answersAllRight, 3), 10);
  });

  it(`should return 20 when all answers are true and time is less than 30s`, () => {
    assert.equal(getPoints(data.answersAllRightTimeLessThan30, 3), 20);
  });

  it(`should return 16 when 2 notes are left and time is less than 30s`, () => {
    assert.equal(getPoints(data.pointsTest1, 2), 16);
  });

  it(`should return 12 when 1 note is left and time is less than 30s`, () => {
    assert.equal(getPoints(data.pointsTest2, 1), 12);
  });

  it(`should return 12 when 3 notes are left and one answer took more than 30s`, () => {
    assert.equal(getPoints(data.pointsTest3, 3), 19);
  });

  it(`should return 10 when 3 notes are left and every answer took 30s`, () => {
    assert.equal(getPoints(data.pointsTest4, 3), 10);
  });

  it(`should return 18 when 3 notes are left and 2 answers took more than 30s`, () => {
    assert.equal(getPoints(data.pointsTest5, 3), 18);
  });

  it(`should return 17 when 3 notes are left and 3 answers took more than 30s`, () => {
    assert.equal(getPoints(data.pointsTest6, 3), 17);
  });

  it(`should return 16 when 3 notes are left and 4 answers took more than 30s`, () => {
    assert.equal(getPoints(data.pointsTest7, 3), 16);
  });
});

describe(`Results`, () => {
  it(`should return message with results`, () => {
    assert.equal(getResults(data.allPlayers, data.player1), getFormattedWinMessage(3, 9, 77));
  });

  it(`should return message that time is up`, () => {
    assert.equal(getResults(data.allPlayers, data.player2), MESSAGE_TIME_OUT);
  });

  it(`should return message that there are no lifes left`, () => {
    assert.equal(getResults(data.allPlayers, data.player3), MESSAGE_NOTES_END);
  });
});
