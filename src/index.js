import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animate.css';
import '../fonts/font.css';
import '../css/style.css';

import { closeModal, modal } from './modules/modal';
import { slider } from './modules/slider';
import { timer } from './modules/timer';
import { calculator } from './modules/calculator';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { smoothScroll } from './modules/smoothScroll';

slider({
  sliderTrack: '.service-slider__track',
  sliderArrows: '.services-arrows',
  buttonLeft: '.services__arrow--left',
  buttonRight: '.services__arrow--right',
  slideItem: '.services__item',
  slider: '.service-slider',
  allSliderItems: '.services__item',
});
slider({
  sliderTrack: '.benefits-wrap',
  sliderArrows: '.benefits-arrows',
  buttonLeft: '.benefits__arrow--left',
  buttonRight: '.benefits__arrow--right',
  slideItem: '.benefits__item',
  slider: '.benefits-inner',
  allSliderItems: '.benefits__item',
});

modal();
timer('28 jule 2026');
smoothScroll();
calculator();
validation();
sendForm(() => {
  const openedModal = document.querySelector('.modal-opened');
  closeModal(openedModal);
});
