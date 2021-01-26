'use strict';

const popupButton = popupReg.querySelector('.popup-reg__submit');
const popupLoad = popupReg.querySelector('.popup-reg__loading');
const popupForm = popupReg.querySelector('form');

function popupFormSubmit() {
    function thanksShowPopup() {
        popupReg.innerHTML = `
            <div class="popupThanks">
                <p class="h1">Спасибо за заявку</p>
                <p>Мы свяжемся с вами в ближайшее время</p>
                <button type="submit" class="popup-reg__submit outline-none">Продолжить</button>
            </div>
        `;
    }
    popupForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        popupButton.style.display = 'none';
        popupLoad.style.display = 'block';
        setTimeout(thanksShowPopup, 3000);
    });
}

popupFormSubmit();
