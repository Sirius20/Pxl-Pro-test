'use strict';

export function infoSelect() {
    const info = document.querySelector('.info');
    const infoSelect = info.querySelector('.info__select');
    const infoSelectTitle = infoSelect.querySelector('.info__select__title');
    const infoSelectChoice = infoSelect.querySelector('.info__select__choice');
    const infoSelectContent = infoSelect.querySelector('.info__select__content');

    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Иркутск'];

    function selectToggleTitle() {
        if (infoSelect.getAttribute('data-state') === 'active') {
            infoSelect.setAttribute('data-state', '');
        } else {
            infoSelect.setAttribute('data-state', 'active');
            infoSelectChoice.style.display = 'block';
            infoSelectTitle.classList.add('info__title_min');
        }
    }

    function renderSelectCities() {
        cities.forEach((city) => {
            infoSelectContent.innerHTML += `
            <input id="${city}" class="info__select__input" type="radio" name="city">
            <label tabindex="0" for="${city}" class="info__select__label">${city}</label>
            `;
        });
    }

    function closeSelectToggle() {
        infoSelectContent.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('info__select__label')) {
                infoSelectChoice.textContent = evt.target.textContent;
                infoSelect.setAttribute('data-state', '');
            }
        });

        infoSelectContent.addEventListener('keydown', (evt) => {
            if(evt.code === 'Enter' && evt.target.classList.contains('info__select__label')) {
                infoSelectChoice.textContent = evt.target.textContent;
            }
        });
    }

    infoSelect.addEventListener('click', selectToggleTitle);
    infoSelect.addEventListener('keydown', (evt) => {
        if (evt.code === 'Enter') {
            selectToggleTitle();
        }
    });

    renderSelectCities();
    closeSelectToggle();
}
