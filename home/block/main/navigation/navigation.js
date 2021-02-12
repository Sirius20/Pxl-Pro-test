'use strict';

const nav = document.querySelector('.nav');
const navMenu = nav.querySelector('.navigation__menu');
const navItems = navMenu.querySelectorAll('.navigation__item');

function findItem() {
    navItems.forEach(item => {
        if (item.classList.contains('navigation__item_active')) {
            item.classList.remove('navigation__item_active');
        }
    });
}

navMenu.addEventListener('click', evt => {
    const parent = evt.target.closest('.navigation__item');
    if (evt.target.classList.contains('navigation__link') && !parent.classList.contains('.navigation__item_active')) {
        findItem();
        parent.classList.add('navigation__item_active');
    }
});

nav.addEventListener('click', evt => {
    console.log(evt.target);
    if (!evt.target.classList.contains('navigation__link') && !evt.target.classList.contains('button')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        findItem();
    }
});