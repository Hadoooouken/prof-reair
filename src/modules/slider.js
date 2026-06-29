export const slider = (config) => {
  const sliderTrack = document.querySelector(config.sliderTrack);
  const sliderArrows = document.querySelector(config.sliderArrows);
  const buttonLeft = document.querySelector(config.buttonLeft);
  const buttonRight = document.querySelector(config.buttonRight);
  const slideItem = document.querySelector(config.slideItem);
  const slider = document.querySelector(config.slider);
  const allSliderItems = document.querySelectorAll(config.allSliderItems);

  let offset = 0;
  let slideItemWidth = slideItem.offsetWidth;

  const getMaxStep = () => {
    slideItemWidth = slideItem.offsetWidth;

    const visibleCards = Math.floor(slider.clientWidth / slideItemWidth);

    return allSliderItems.length - visibleCards;
  };

  const disableButtons = () => {
    const maxStep = getMaxStep();
    if (offset <= -slideItemWidth * maxStep) {
      buttonRight.classList.add('button__arrow--disabled');
    } else {
      buttonRight.classList.remove('button__arrow--disabled');
    }
    if (offset >= 0) {
      buttonLeft.classList.add('button__arrow--disabled');
    } else {
      buttonLeft.classList.remove('button__arrow--disabled');
    }
  };

  disableButtons();

  window.addEventListener('resize', (e) => {
    slideItemWidth = slideItem.offsetWidth;
    offset = 0;
    sliderTrack.style.transform = `translateX(${offset}px)`;
    disableButtons();
  });

  sliderArrows.addEventListener('click', (e) => {
    if (e.target.closest(config.buttonRight)) {
      offset += -slideItemWidth;
      sliderTrack.style.transform = `translateX(${offset}px)`;
      disableButtons();
    } else if (e.target.closest(config.buttonLeft)) {
      offset += slideItemWidth;
      sliderTrack.style.transform = `translateX(${offset}px)`;
      disableButtons();
    }
  });
};
