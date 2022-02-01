export default (elements, activeClass, removeParentActive) => {
  elements.forEach((element) => {
    if (element.classList.contains(activeClass)) {
      element.classList.remove(activeClass);

      if (removeParentActive) {
        element.parentNode.classList.remove(activeClass);
      }
    }
  });
};
