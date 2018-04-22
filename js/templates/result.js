import logo from './logo.js';
import fail from './fail.js';
import win from './win.js';
import {makeDOMElement} from './../utils/misc.js';

export default (data) => {
  let results;

  if (data.status === `fail`) {
    results = fail(data);
  } else {
    results = win(data);
  }

  const html = makeDOMElement(`
    <section class="main main--result">
      ${logo}
      ${results}
    </section>
  `);

  return html;
};

