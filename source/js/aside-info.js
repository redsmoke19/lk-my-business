const breakpointTablet = window.matchMedia('(max-width: 1023px)');

const getAsideInfo = () => {
  const asideInfo = document.querySelector('.aside-info');
  const tabs = document.querySelector('.tabs-nav__header');
  const wrapper = document.querySelector('.about__wrapper');

  if (!asideInfo) {
    return;
  }

  const resizeHeight = () => {
    wrapper.style.height = `${asideInfo.clientHeight} - ${tabs.clientHeight}px`;
  };

  const breakpointChecker = () => {
    if (breakpointTablet.matches) {
      asideInfo.style.top = 'unset';
      wrapper.style.minHeight = 'unset';
    } else {
      asideInfo.style.top = `-${tabs.clientHeight}px`;
      wrapper.style.minHeight = `${asideInfo.clientHeight - tabs.clientHeight}px`;

      window.addEventListener('resize', resizeHeight);
    }
  };

  breakpointTablet.addListener(breakpointChecker);
  breakpointChecker();
};

export { getAsideInfo };
