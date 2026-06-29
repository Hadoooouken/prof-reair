import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/animate.css';
import '../fonts/font.css';
import '../css/style.css';

import { modal } from './modules/modal';
import { slider } from './modules/slider';
import { timer } from './modules/timer';
import { smothScroll } from './smothScroll';

modal()
slider()
timer('28 jule 2026')
smothScroll()

// document.querySelector('img').addEventListener('click', function() {
//     this.requestFullscreen();
// });