import unActive from './un-active';

export default () => {
  const about = document.querySelector('.about');

  if (about) {
    const aboutButtons = about.querySelectorAll('.about__button');
    const aboutContents = about.querySelectorAll('.about__content');

    aboutButtons.forEach((aboutButton, i) => {
      aboutButton.addEventListener('click', () => {
        unActive(aboutButtons, 'active');
        aboutButton.classList.add('active');

        if (aboutContents[i]) {
          unActive(aboutContents, 'active');
          aboutContents[i].classList.add('active');
        }
      });
    });
  }
};
