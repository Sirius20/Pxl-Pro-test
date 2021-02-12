'use strict';

export function format () {
    const format = document.querySelector('.format');
    const formatOn = format.querySelector('.format__on');
    const formatOff = format.querySelector('.format__off');
    const formatSlider = format.querySelector('.format__slider');
    const formatCheckbox = format.querySelector('input');


    function formatToggle() {
        formatOff.classList.toggle('format__choice');
        formatOn.classList.toggle('format__choice');
    }

    formatCheckbox.addEventListener('change', formatToggle);

    formatSlider.addEventListener('keydown', (evt) => {
        if(evt.code === 'Enter') {
            formatCheckbox.toggleAttribute('checked');
            formatToggle();
        }
    });
}
