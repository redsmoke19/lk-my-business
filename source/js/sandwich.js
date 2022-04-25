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
};

const closeMenu = () => {
  scrollLock.enableScrolling();
  sandwich.classList.remove('is-active');
  sandwich.ariaPressed = 'false';
  nav.classList.remove('is-active');
  headerLogo.classList.remove('is-menu');
};

const breakpointChecker = () => {
  if (breakpointMd.matches && nav) {
    if (nav.classList.contains('is-active')) {
      closeMenu();
    }
  }
  breakpointMd.addListener(breakpointChecker);
};

const initSandwichMenu = () => {
  if (sandwich && nav) {
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
