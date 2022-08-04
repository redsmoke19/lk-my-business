const breakpointTablet = window.matchMedia('(max-width: 1023px)');

const getAsideInfo = () => {
  const asideInfo = document.querySelector('.aside-info');
  const tabs = document.querySelector('.tabs-nav__header');

  if (!asideInfo) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      asideInfo.style.top = 'unset';
    } else {
      asideInfo.style.top = `-${tabs.clientHeight}px`;
    }
  };

  breakpointTablet.addListener(breakpointChecker);
  breakpointChecker();
};

export { getAsideInfo };
