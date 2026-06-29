export const smothScroll = () => {
  const headerBlock = document.querySelector('#header');

  const serviceBtn = document.querySelector('.smooth-scroll');

  serviceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerBlock.scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerBlock.offsetHeight) {
      serviceBtn.style.display = 'block';
    } else {
      serviceBtn.style.display = 'none';
    }
  });
};
