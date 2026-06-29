// export const slider = () => {
//   const benefitsWrap = document.querySelector('.benefits-wrap');
//   const benefitsArrows = document.querySelector('.benefits-arrows');
//   const buttonLeft = document.querySelector('.benefits__arrow--left');
//   const buttonRight = document.querySelector('.benefits__arrow--right');
//   const slideItem = document.querySelector('.benefits__item');
//   const benefitInner = document.querySelector('.benefits-inner');

//   let benefitInnerWidth = benefitInner.clientWidth;
//   let step = 3;
//   let offset = 0;
//   let slideItemWidth = slideItem.offsetWidth;

//   // const res = benefitInnerWidth / slideItemWidth

//   const disableButtons = () => {
//     if (slideItemWidth < 180) {
//       step = 5;
//     } else {
//       step = 3;
//     }

//     if (offset <= -slideItemWidth * step) {
//       buttonRight.classList.add('benefits__arrow--disabled');
//     } else {
//       buttonRight.classList.remove('benefits__arrow--disabled');
//     }
//     if (offset >= 0) {
//       buttonLeft.classList.add('benefits__arrow--disabled');
//     } else {
//       buttonLeft.classList.remove('benefits__arrow--disabled');
//     }
//   };

//   disableButtons();

//   window.addEventListener('resize', (e) => {
//     slideItemWidth = slideItem.offsetWidth;
//     offset = 0;
//     benefitsWrap.style.transform = `translateX(${offset}px)`;
//     disableButtons();
//   });

//   benefitsArrows.addEventListener('click', (e) => {
//     if (e.target.closest('.benefits__arrow--right')) {
//       offset += -slideItemWidth;
//       benefitsWrap.style.transform = `translateX(${offset}px)`;
//       console.log(offset);
//       disableButtons();
//     } else if (e.target.closest('.benefits__arrow--left')) {
//       offset += slideItemWidth;
//       benefitsWrap.style.transform = `translateX(${offset}px)`;
//       console.log(offset);
//       disableButtons();
//     }
//   });
// };

export const slider = (config) => {
  const sliderTrack = document.querySelector(config.sliderTrack);
  const sliderArrows = document.querySelector(config.sliderArrows);
  const buttonLeft = document.querySelector(config.buttonLeft);
  const buttonRight = document.querySelector(config.buttonRight);
  const slideItem = document.querySelector(config.slideItem);
  const slider = document.querySelector(config.slider);
  const allSliderItems = document.querySelectorAll(config.allSliderItems);

console.log('sliderTrack', sliderTrack);
console.log('sliderArrows', sliderArrows);
console.log('buttonLeft', buttonLeft);
console.log('buttonRight', buttonRight);
console.log('slideItem', slideItem);
console.log('slider', slider);
console.log('allSliderItems', allSliderItems);

// if (
//   !sliderTrack ||
//   !sliderArrows ||
//   !buttonLeft ||
//   !buttonRight ||
//   !slideItem ||
//   !slider ||
//   !allSliderItems.length
// ) {
//   return;
// }
  let offset = 0;
  let slideItemWidth = slideItem.offsetWidth;
  console.log(slider.clientWidth / slideItemWidth);

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
