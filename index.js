const plusIcon = './assets/images/icon-plus.svg';
const minusIcon = './assets/images/icon-minus.svg';

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const btn = faq.querySelector('.faq-btn');
  const answer = faq.querySelector('.faq-a');
  const icon = btn.querySelector('.icon');

  btn.addEventListener('click', () => {
    answer.classList.toggle('hidden');
    const isHidden = answer.classList.contains('hidden');

    btn.setAttribute('aria-expanded', !isHidden);
    icon.src = isHidden ? plusIcon : minusIcon;
  });
});
