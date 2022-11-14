import datePicker from './date-picker';
import user from './user';
// import user from './user';
import about from './about';
// import faq from './faq';
import range from './range';
import form from './form';
import { initDropZone } from './dropzone';
import { initAccordions } from './init-accordions';
import { initSandwichMenu } from './sandwich';
import { checkTabsCount } from './tabs-slider';
import { getAsideInfo } from './aside-info';
import {initModals} from './vendor/init-modals';

window.dateChoise = null;


document.addEventListener('DOMContentLoaded', () => {
  // user();
  // about();
  window.dateChoise = datePicker();
  user();
  // faq();
  range();
  form();
  initDropZone();
  initAccordions();
  initSandwichMenu();
  checkTabsCount();
  getAsideInfo();
  initModals();
});
