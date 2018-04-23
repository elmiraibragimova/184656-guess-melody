const _renderLeftNotes = (notesLeft) => {
  let result = ``;
  for (let i = 0; i < notesLeft; i++) {
    result += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
  }
  return result;
};

export default (data) => {
  if (!data.started) {
    return ``;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${Math.trunc(data.timeLeft / 60)}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${data.timeLeft % 60}</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${_renderLeftNotes(data.notesLeft)}
    </div>
  `;
};

