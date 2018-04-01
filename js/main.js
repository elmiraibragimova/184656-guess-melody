const template = document.querySelector(`#templates`);
const gameScreens = [...template.content.querySelectorAll(`.main`)];
gameScreens.sort((screenA, screenB) => {
  const a = parseInt(screenA.dataset.order, 10);
  const b = parseInt(screenB.dataset.order, 10);
  return a - b;
});

const appScreen = document.querySelector(`.app .main`);
let currentScreenIndex = 0;

const updateScreen = (screenNumber) => {
  const currentScreen = gameScreens[screenNumber];
  appScreen.innerHTML = ``;
  appScreen.appendChild(currentScreen);
};

const keyDownHandler = (event) => {
  if (event.altKey && event.keyCode === 37) {
    if (currentScreenIndex > 0) {
      currentScreenIndex -= 1;
      updateScreen(currentScreenIndex);
    }
  }

  if (event.altKey && event.keyCode === 39) {
    if (currentScreenIndex < gameScreens.length - 1) {
      currentScreenIndex += 1;
      updateScreen(currentScreenIndex);
    }
  }
};

updateScreen(currentScreenIndex);
document.addEventListener(`keydown`, keyDownHandler);
