import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animate.css';
import '../fonts/font.css';
import '../css/style.css';

import { modal } from './modules/modal';
import { slider } from './modules/slider';
import { timer } from './modules/timer';
import { smothScroll } from './modules/smothScroll';

modal();
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

timer('28 jule 2026');
smothScroll();
