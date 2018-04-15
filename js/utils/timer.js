const Timer = function (time) {
  this.time = time;
  this.timeLeft = time;
};

Timer.prototype.tick = function () {
  if (this.timeLeft) {
    if (this.onTick) {
      this.onTick();
    }
    setTimeout(() => {
      this.timeLeft -= 1;
      this.tick();
    }, 1000);
  } else {
    if (this.onEnd) {
      this.onEnd();
    }
  }
};

export default Timer;
