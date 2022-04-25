import { ScrollLock } from './vendor/scroll-lock';

const breakpointMd = window.matchMedia('(min-width:1024px)');
const headerLogo = document.querySelector('[data-header-logo]');
const sandwich = document.querySelector('[data-sandwich]');
const nav = document.querySelector('[data-main-nav]');
const scrollLock = new ScrollLock();

const openMenu = () => {
  scrollLock.disableScrolling();
  sandwich.classList.add('is-active');
  sandwich.ariaPressed = 'true';
  nav.classList.add('is-active');
  headerLogo.classList.add('is-menu');
  // navItem.forEach((item, index) => {
  //   item.style.transitionDelay = `${0.3 + index * 0.2}s`;
  // });
};

const closeMenu = () => {
  scrollLock.enableScrolling();
  sandwich.classList.remove('is-active');
  sandwich.ariaPressed = 'false';
  nav.classList.remove('is-active');
  headerLogo.classList.remove('is-menu');
  // navItem.forEach((item) => {
  //   item.style.transitionDelay = '';
  // });
};

const breakpointChecker = () => {
  if (breakpointMd.matches) {
    if (nav.classList.contains('is-active')) {
      closeMenu();
    }
  }
  breakpointMd.addListener(breakpointChecker);
};

const initSandwichMenu = () => {
  if (sandwich) {
    sandwich.addEventListener('click', () => {
      if (sandwich.ariaPressed === 'true') {
        closeMenu();
      } else {
        openMenu();
      }
    });
    breakpointChecker();
  }
};

export { initSandwichMenu };
