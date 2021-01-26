'use strict';

const costCounter = popupReg.querySelector('.cost__counter');
const costRange = popupReg.querySelector('.cost__range');

function substitutionValueRange() {
    costCounter.innerHTML = costRange.value;

    costRange.addEventListener('input', function() {
        costCounter.innerHTML = this.value;
        costRange.style.backgroundColor = "#FF7777";
    });
}

substitutionValueRange();
