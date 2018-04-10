const makeDOMElement = (html) => {
  html = html.trim();
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content.firstChild;
};

const getRandomValue = (top) => {
  const value = parseInt(10 * Math.random(), 10) % top;
  return value;
};

const updateScreen = (currentScreen) => {
  const appScreen = document.querySelector(`.app .main`);
  appScreen.innerHTML = ``;
  appScreen.appendChild(currentScreen);

  if (currentScreen.initScreen) {
    currentScreen.initScreen();
  }
};

const humanityCount = (count, one, two, many) => {
  const check = (num) => (count === num || (count > 20 && count.toString().endsWith(num)));

  if (check(1)) {
    return one;
  }

  if (check(2) || check(3) || check(4)) {
    return two;
  }

  return many;
};

export {getRandomValue, makeDOMElement, updateScreen, humanityCount};
