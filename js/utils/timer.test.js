import {assert} from 'chai';
import Timer from './timer.js';

describe(`Timer`, () => {
  it(`should check timer`, (done) => {
    let onEndCalledTimes = 0;
    let tickCalledTimes = 0;
    let timer = new Timer(5);

    timer.onTick = () => {
      tickCalledTimes += 1;
    };

    timer.onEnd = () => {
      onEndCalledTimes += 1;
    };

    timer.tick();
    setTimeout(() => {
      assert.equal(tickCalledTimes, 5);
      assert.equal(onEndCalledTimes, 1);
      done();
    }, 6000);
  }).timeout(7000);
});
