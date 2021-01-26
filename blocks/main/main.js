'use strict';

import {substitutionValueRange} from '../cost/cost';
import {popupFormSubmit} from '../footer/footer';
import {format} from '../format/format';
import {info} from '../info/info';

export const popupReg = document.querySelector('.popup-reg');
const closePopupBtn = popupReg.querySelector('.popup-reg__close');
const useElements = popupReg.querySelectorAll('.outline-none');
const labels = popupReg.querySelectorAll('label');

function closePopup() {
    popupReg.style.display = 'none';
}

function removeOutline() {
    useElements.forEach(item => {
        item.addEventListener('mousedown', () => {
            item.style.outline = 'none';
        });
    });
}

function activeElement() {
    labels.forEach(label => {
        label.addEventListener('keydown', (evt) => {
            if (evt.code === 'Enter') {
                const inp = popupReg.querySelector(`[id='${label.getAttribute('for')}']`);
                if (inp.type === 'checkbox') {
                    inp.toggleAttribute('checked');
                } else if (inp.type === 'radio') {
                    inp.setAttribute('checked', 'checked');
                }
            }
        });
    });
}

closePopupBtn.addEventListener('click', closePopup);
closePopupBtn.addEventListener('keydown', (evt) => {
    if (evt.code === 'Enter') {
        closePopup();
    }
});

removeOutline();
activeElement();
info();
format();
substitutionValueRange();
popupFormSubmit();
