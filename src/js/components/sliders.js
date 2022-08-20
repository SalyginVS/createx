const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper( '.swiper', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  }
});

