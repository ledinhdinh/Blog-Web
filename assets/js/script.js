'use strict';
/**
 * Navbar variables
 */
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

/**
 * navToogle function.
 */
const navToogleFunc = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToogleFunc);
navCloseBtn.addEventListener('click', navToogleFunc);