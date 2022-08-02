const asideInfo = () => {
  const asideInfo = document.querySelector('.aside-info');
  const tabs = document.querySelector('.tabs-nav__header');

  if (!asideInfo) {
    return;
  }

  asideInfo.style.top = `-${tabs.clientHeight}px`;

}

export {asideInfo};
