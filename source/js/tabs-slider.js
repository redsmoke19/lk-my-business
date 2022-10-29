const tabsContainer = document.querySelector('.tabs-nav');
const tabs = document.querySelector('.tabs-nav__header');
const tabsList = document.querySelectorAll('.tabs-nav__item');
const pageWrapper = document.querySelector('.page-main__wrapper');
const breakpointTablet = window.matchMedia('(max-width: 1023px)');
const initialSlide = window?.settings?.swipper?.initialSlide || 0;

const TABS_SMALL_COUNT = 8;

const tabsSlider = () => {
  let sliderTabsInit;

  const getSlider = () => {
    if (tabs) {
      sliderTabsInit = new Swiper(tabs, {
        direction: 'horizontal',
        grabCursor: true,
        preventClicks: true,
        preventClicksPropagation: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,

        initialSlide: initialSlide,

        navigation: {
          nextEl: '.tabs-nav__arrow--next',
          prevEl: '.tabs-nav__arrow--prev',
          disabledClass: 'tabs-nav__arrow--disabled',
        },

        scrollbar: {
          el: '.tabs-nav__scrollbar',
          draggable: true,
          snapOnRelease: true,
          hide: false,
        },
      });
    }
  };

  const resizeHandlerTablet = () => {
    if (breakpointTablet.matches === true) {
      if (sliderTabsInit !== undefined) {
        sliderTabsInit.destroy(true, true);
      }
    } else if (breakpointTablet.matches === false) {
      getSlider();
    }
  };

  const breakpointChecker = () => {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        resizeHandlerTablet();
      }, 100);
    }
  };

  breakpointTablet.addListener(breakpointChecker);
  breakpointChecker();
};

const checkTabsCount = () => {
  if (tabsContainer) {
    if (!pageWrapper) {
      if (tabsList.length <= TABS_SMALL_COUNT) {
        tabsContainer.classList.add('tabs-nav--small');
      } else {
        tabsContainer.classList.add('tabs-nav--large');
        tabsSlider();
      }
    }

    if (pageWrapper) {
      if (tabsList.length <= 6) {
        tabsContainer.classList.add('tabs-nav--small');
      } else {
        tabsContainer.classList.add('tabs-nav--large');
        tabsSlider();
      }
    }
  }
  
};

export { checkTabsCount };
