export default (data) => `
  <div>
    <h2 class="title">${data.title}</h2>
    <div class="main-stat">${data.description}</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </div>
`;
