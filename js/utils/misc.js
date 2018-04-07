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
};

export {getRandomValue, makeDOMElement, updateScreen};
