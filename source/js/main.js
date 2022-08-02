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
import { tabsSlider } from './tabs-slider';
import { asideInfo } from './aside-info';

document.addEventListener('DOMContentLoaded', () => {
  // user();
  // about();
  datePicker();
  user();
  // faq();
  range();
  form();
  initDropZone();
  initAccordions();
  initSandwichMenu();
  tabsSlider();
  asideInfo();
});
