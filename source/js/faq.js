export default () => {
  const faq = document.querySelector('.faq');

  if (faq) {
    const faqButtons = faq.querySelectorAll('.faq__button');

    faqButtons.forEach((faqButton) => {
      faqButton.addEventListener('click', () => {
        faqButton.classList.toggle('active');
        faqButton.nextElementSibling.classList.toggle('active');
      });
    });
  }
};
