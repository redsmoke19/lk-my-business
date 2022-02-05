// export default () => {
//   const user = document.querySelector('.page-header__user');
//
//   if (user) {
//     const userToggle = user.querySelector('.user__toggle');
//     const userList = user.querySelector('.user__list');
//
//     const onUserToggleMouseEnter = () => {
//       userToggle.classList.add('active');
//       userList.classList.add('active');
//
//       user.addEventListener('mouseleave', onUserMouseLeave);
//       userToggle.removeEventListener('mouseenter', onUserToggleMouseEnter);
//     };
//
//     const onUserMouseLeave = () => {
//       userToggle.classList.remove('active');
//       userList.classList.remove('active');
//
//       userToggle.addEventListener('mouseenter', onUserToggleMouseEnter);
//       user.removeEventListener('mouseleave', onUserMouseLeave);
//     };
//
//     userToggle.addEventListener('mouseenter', onUserToggleMouseEnter);
//     user.addEventListener('mouseleave', onUserMouseLeave);
//   }
// };

export default () => {
  let currentTarget;
  const userButtonClickHandler = (e) => {
    const menuItem = e.target.nextElementSibling;
    if (menuItem && menuItem.matches('._js-user-list.active')) {
      menuItem.previousElementSibling.classList.remove('active');
      menuItem.classList.remove('active');
      return;
    }
    if (currentTarget) {
      if (!e.target.closest('._js-user-list')) {
        currentTarget.previousElementSibling.classList.remove('active');
        currentTarget.classList.remove('active');
      }
    }
    if (menuItem && menuItem.matches('._js-user-list')) {
      menuItem.previousElementSibling.classList.add('active');
      menuItem.classList.add('active');
      currentTarget = menuItem;
    }
  };
  document.body.addEventListener('click', userButtonClickHandler);
};
