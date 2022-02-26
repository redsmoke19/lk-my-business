import datePicker from './date-picker';
import user from './user';
// import user from './user';
import about from './about';
// import faq from './faq';
import range from './range';
import form from './form';
import { initDropZone } from './dropzone';
import { initAccordions } from './init-accordions';

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
});
