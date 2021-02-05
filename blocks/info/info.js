'use strict';

import {popupReg} from '../main/main';
import {infoSelect} from './info__select/info__select';

export function info() {
    const info = popupReg.querySelector('.info');
    const infoName = info.querySelector('.info__name');
    const infoPhone = info.querySelector('.info__phone');
    const infoComment = info.querySelector('.info__comment');

    function infoFocus(infoType, inp) {
        const infoInp = infoType.querySelector(inp);
        const infoTitle = infoType.querySelector('.info__title');

        infoType.addEventListener('input', () => {
            if (!infoTitle.classList.contains('info__title_min')) {
                infoTitle.classList.add('info__title_min');
                infoInp.classList.add('info__input_max');
            }
        });

        info.addEventListener('click', () =>{
            if (infoInp.value == '') {
                infoTitle.classList.remove('info__title_min');
                infoInp.classList.remove('info__input_max');
            }
        });
    }

    function validationPhone() {
        const inp = infoPhone.querySelector('input');

        infoPhone.addEventListener('click', () => {
            inp.classList.add('info__input_max');
            if (inp.value === '') {
                inp.value = '+7 ';
            } else {
                return;
            }
        });

        infoPhone.addEventListener('change', () => {
            inp.setCustomValidity('');
            let validPhone = inp.value.replace(/\D/g, '').substring(1, 11);
            validPhone = validPhone != '' ? validPhone.slice(0, 3) + ' ' + validPhone.slice(3, 6) + '-' + validPhone.slice(6, 8) + '-' + validPhone.slice(8, 10) : '';
            inp.value = '+7 ' + validPhone;

            if (inp.value.length < 16) {
                inp.setCustomValidity('Введены не все символы');
                inp.style.color = "#FF7777";
                inp.style.borderColor = "#FF7777";
            } else {
                inp.setCustomValidity('');
                inp.style.color = "white";
                inp.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }
        });
    }

    infoName.addEventListener('input', () => {
        const inp = infoName.querySelector('input');
        inp.value = inp.value.replace(/\d/g, '');
    });

    infoSelect();
    validationPhone();
    infoFocus(infoName, 'input');
    infoFocus(infoPhone, 'input');
    infoFocus(infoComment, 'textarea');
}
