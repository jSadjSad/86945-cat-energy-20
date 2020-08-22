"use strict";

var navToggle = document.querySelector('.main-nav__toggle');
var mainNavList = document.querySelector('.main-nav__list');

mainNavList.classList.remove('main-nav__list--nojs');


navToggle.addEventListener('click', function() {
  if (mainNavList.classList.contains('main-nav__list--closed')) {
    mainNavList.classList.remove('main-nav__list--closed');
  } else {
    mainNavList.classList.add('main-nav__list--closed');
  }
});
