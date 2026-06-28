export const slider = () => {
  const benefitsWrap = document.querySelector('.benefits-wrap');
  const benefitsArrows = document.querySelector('.benefits-arrows');
  const buttonLeft = document.querySelector('.benefits__arrow--left');
  const buttonRight = document.querySelector('.benefits__arrow--right');
  const slideItem = document.querySelector('.benefits__item');
  const benefitInner = document.querySelector('.benefits-inner');

  let benefitInnerWidth = benefitInner.clientWidth;
  let step = 3;
  let offset = 0;
  let slideItemWidth = slideItem.offsetWidth;

  // const res = benefitInnerWidth / slideItemWidth

  const disableButtons = () => {
    if (slideItemWidth < 180) {
      step = 5;
    } else {
      step = 3;
    }

    if (offset <= -slideItemWidth * step) {
      buttonRight.classList.add('benefits__arrow--disabled');
    } else {
      buttonRight.classList.remove('benefits__arrow--disabled');
    }
    if (offset >= 0) {
      buttonLeft.classList.add('benefits__arrow--disabled');
    } else {
      buttonLeft.classList.remove('benefits__arrow--disabled');
    }
  };

  disableButtons();

  window.addEventListener('resize', (e) => {
    slideItemWidth = slideItem.offsetWidth;
    offset = 0;
    benefitsWrap.style.transform = `translateX(${offset}px)`;
    disableButtons();
  });

  benefitsArrows.addEventListener('click', (e) => {
    if (e.target.closest('.benefits__arrow--right')) {
      offset += -slideItemWidth;
      benefitsWrap.style.transform = `translateX(${offset}px)`;
      console.log(offset);
      disableButtons();
    } else if (e.target.closest('.benefits__arrow--left')) {
      offset += slideItemWidth;
      benefitsWrap.style.transform = `translateX(${offset}px)`;
      console.log(offset);
      disableButtons();
    }
  });
};
