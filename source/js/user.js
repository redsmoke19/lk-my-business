export default () => {
  const user = document.querySelector('.page-header__user');

  if (user) {
    const userToggle = user.querySelector('.user__toggle');
    const userList = user.querySelector('.user__list');

    const onUserToggleMouseEnter = () => {
      userToggle.classList.add('active');
      userList.classList.add('active');

      user.addEventListener('mouseleave', onUserMouseLeave);
      userToggle.removeEventListener('mouseenter', onUserToggleMouseEnter);
    };

    const onUserMouseLeave = () => {
      userToggle.classList.remove('active');
      userList.classList.remove('active');

      userToggle.addEventListener('mouseenter', onUserToggleMouseEnter);
      user.removeEventListener('mouseleave', onUserMouseLeave);
    };

    userToggle.addEventListener('mouseenter', onUserToggleMouseEnter);
    user.addEventListener('mouseleave', onUserMouseLeave);
  }
};
