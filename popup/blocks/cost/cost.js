'use strict';

import {popupReg} from '../main/main';

export function substitutionValueRange() {
    const costCounter = popupReg.querySelector('.cost__counter');
    const costRange = popupReg.querySelector('.cost__range');

    costCounter.innerHTML = costRange.value;

    costRange.addEventListener('input', function() {
        costCounter.innerHTML = this.value;
        costRange.style.backgroundColor = "#FF7777";
    });
}

