"use strict";

var sliderToggleBefore = document.querySelector('.example__slider-toggle--before');
var sliderToggleAfter = document.querySelector('.example__slider-toggle--after');
var sliderImageAfter = document.querySelector('.example__slider-image-wrapper--after');
var sliderHandel = document.querySelector('.example__slider-handle');


sliderToggleAfter.addEventListener('click', function() {
  if (sliderImageAfter.classList.contains('example__slider-image-wrapper--after-hidden')) {
    sliderImageAfter.classList.remove('example__slider-image-wrapper--after-hidden');
    sliderImageAfter.classList.add('example__slider-image-wrapper--after-visible');
  }
});

sliderToggleBefore.addEventListener('click', function() {
  if (sliderImageAfter.classList.contains('example__slider-image-wrapper--after-visible')) {
    sliderImageAfter.classList.remove('example__slider-image-wrapper--after-visible');
    sliderImageAfter.classList.add('example__slider-image-wrapper--after-hidden');
  }
});

sliderToggleAfter.addEventListener('click', function() {
  if (sliderHandel.classList.contains('example__slider-handle--before')) {
    sliderHandel.classList.remove('example__slider-handle--before');
    sliderHandel.classList.add('example__slider-handle--after');
  }
});

sliderToggleBefore.addEventListener('click', function() {
  if (sliderHandel.classList.contains('example__slider-handle--after')) {
    sliderHandel.classList.remove('example__slider-handle--after');
    sliderHandel.classList.add('example__slider-handle--before');
  }
});
