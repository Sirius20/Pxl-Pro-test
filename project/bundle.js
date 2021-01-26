/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/cost/cost.js":
/*!*****************************!*\
  !*** ./blocks/cost/cost.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"substitutionValueRange\": () => /* binding */ substitutionValueRange\n/* harmony export */ });\n/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/main */ \"./blocks/main/main.js\");\n\r\n\r\n\r\n\r\nfunction substitutionValueRange() {\r\n    const costCounter = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('.cost__counter');\r\n    const costRange = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('.cost__range');\r\n\r\n    costCounter.innerHTML = costRange.value;\r\n\r\n    costRange.addEventListener('input', function() {\r\n        costCounter.innerHTML = this.value;\r\n        costRange.style.backgroundColor = \"#FF7777\";\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/cost/cost.js?");

/***/ }),

/***/ "./blocks/footer/footer.js":
/*!*********************************!*\
  !*** ./blocks/footer/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popupFormSubmit\": () => /* binding */ popupFormSubmit\n/* harmony export */ });\n/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/main */ \"./blocks/main/main.js\");\n\r\n\r\n\r\n\r\nfunction popupFormSubmit() {\r\n    const popupButton = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('.popup-reg__submit');\r\n    const popupLoad = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('.popup-reg__loading');\r\n    const popupForm = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('form');\r\n\r\n    function thanksShowPopup() {\r\n        _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.innerHTML = `\r\n            <div class=\"popup-reg__close outline-none\" tabindex=\"1\"></div>\r\n            <div class=\"popupThanks\">\r\n                <p class=\"h1\">Спасибо за заявку</p>\r\n                <p>Мы свяжемся с вами в ближайшее время</p>\r\n                <button type=\"submit\" class=\"popup-reg__submit outline-none\">Продолжить</button>\r\n            </div>\r\n        `;\r\n    }\r\n    popupForm.addEventListener('submit', (evt) => {\r\n        evt.preventDefault();\r\n        popupButton.style.display = 'none';\r\n        popupLoad.style.display = 'block';\r\n        setTimeout(thanksShowPopup, 3000);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/footer/footer.js?");

/***/ }),

/***/ "./blocks/format/format.js":
/*!*********************************!*\
  !*** ./blocks/format/format.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => /* binding */ format\n/* harmony export */ });\n\r\n\r\nfunction format () {\r\n    const format = document.querySelector('.format');\r\n    const formatOn = format.querySelector('.format__on');\r\n    const formatOff = format.querySelector('.format__off');\r\n    const formatSlider = format.querySelector('.format__slider');\r\n    const formatCheckbox = format.querySelector('input');\r\n\r\n\r\n    function formatToggle() {\r\n        formatOff.classList.toggle('format__choice');\r\n        formatOn.classList.toggle('format__choice');\r\n    }\r\n\r\n    formatCheckbox.addEventListener('change', formatToggle);\r\n\r\n    formatSlider.addEventListener('keydown', (evt) => {\r\n        if(evt.code === 'Enter') {\r\n            formatCheckbox.toggleAttribute('checked');\r\n            formatToggle();\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/format/format.js?");

/***/ }),

/***/ "./blocks/info/info.js":
/*!*****************************!*\
  !*** ./blocks/info/info.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"info\": () => /* binding */ info\n/* harmony export */ });\n/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/main */ \"./blocks/main/main.js\");\n/* harmony import */ var _info_select_info_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info__select/info__select */ \"./blocks/info/info__select/info__select.js\");\n\r\n\r\n\r\n\r\n\r\nfunction info() {\r\n    const info = _main_main__WEBPACK_IMPORTED_MODULE_0__.popupReg.querySelector('.info');\r\n    const infoName = info.querySelector('.info__name');\r\n    const infoPhone = info.querySelector('.info__phone');\r\n    const infoComment = info.querySelector('.info__comment');\r\n\r\n    function infoFocus(infoType, inp) {\r\n        const infoInp = infoType.querySelector(inp);\r\n        const infoTitle = infoType.querySelector('.info__title');\r\n\r\n        infoType.addEventListener('input', () => {\r\n            if (!infoTitle.classList.contains('info__title_min')) {\r\n                infoTitle.classList.add('info__title_min');\r\n                infoInp.classList.add('info__input_max');\r\n            }\r\n        });\r\n\r\n        info.addEventListener('click', () =>{\r\n            if (infoInp.value == '') {\r\n                infoTitle.classList.remove('info__title_min');\r\n                infoInp.classList.remove('info__input_max');\r\n            }\r\n        });\r\n    }\r\n\r\n    function validationPhone() {\r\n        const inp = infoPhone.querySelector('input');\r\n\r\n        infoPhone.addEventListener('click', () => {\r\n            inp.classList.add('info__input_max');\r\n            if (inp.value === '') {\r\n                inp.value = '+7 ';\r\n            } else {\r\n                return;\r\n            }\r\n        });\r\n\r\n        infoPhone.addEventListener('input', () => {\r\n            \r\n        });\r\n\r\n        infoPhone.addEventListener('change', () => {\r\n            if (inp.value.length < 16) {\r\n                inp.setCustomValidity('Введены не все символы');\r\n                inp.style.color = \"#FF7777\";\r\n                inp.style.borderColor = \"#FF7777\";\r\n            } else {\r\n                inp.setCustomValidity('');\r\n            }\r\n            \r\n            let validPhone = inp.value.replace(/\\D/g, '').substring(1, 11);\r\n            validPhone = validPhone != '' ? validPhone.slice(0, 3) + ' ' + validPhone.slice(3, 6) + '-' + validPhone.slice(6, 8) + '-' + validPhone.slice(8, 10) : '';\r\n            inp.value = '+7 ' + validPhone;\r\n        });\r\n    }\r\n\r\n    infoName.addEventListener('input', () => {\r\n        const inp = infoName.querySelector('input');\r\n        inp.value = inp.value.replace(/\\d/g, '');\r\n    });\r\n\r\n    (0,_info_select_info_select__WEBPACK_IMPORTED_MODULE_1__.infoSelect)();\r\n    validationPhone();\r\n    infoFocus(infoName, 'input');\r\n    infoFocus(infoPhone, 'input');\r\n    infoFocus(infoComment, 'textarea');\r\n}\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/info/info.js?");

/***/ }),

/***/ "./blocks/info/info__select/info__select.js":
/*!**************************************************!*\
  !*** ./blocks/info/info__select/info__select.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"infoSelect\": () => /* binding */ infoSelect\n/* harmony export */ });\n\r\n\r\nfunction infoSelect() {\r\n    const info = document.querySelector('.info');\r\n    const infoSelect = info.querySelector('.info__select');\r\n    const infoSelectTitle = infoSelect.querySelector('.info__select__title');\r\n    const infoSelectChoice = infoSelect.querySelector('.info__select__choice');\r\n    const infoSelectContent = infoSelect.querySelector('.info__select__content');\r\n\r\n    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону', 'Уфа', 'Красноярск', 'Иркутск'];\r\n\r\n    function selectToggleTitle() {\r\n        if (infoSelect.getAttribute('data-state') === 'active') {\r\n            infoSelect.setAttribute('data-state', '');\r\n        } else {\r\n            infoSelect.setAttribute('data-state', 'active');\r\n            infoSelectChoice.style.display = 'block';\r\n            infoSelectTitle.classList.add('info__title_min');\r\n        }\r\n    }\r\n\r\n    function renderSelectCities() {\r\n        cities.forEach((city) => {\r\n            infoSelectContent.innerHTML += `\r\n            <input id=\"${city}\" class=\"info__select__input\" type=\"radio\" name=\"city\">\r\n            <label tabindex=\"0\" for=\"${city}\" class=\"info__select__label\">${city}</label>\r\n            `;\r\n        });\r\n    }\r\n\r\n    function closeSelectToggle() {\r\n        infoSelectContent.addEventListener('click', (evt) => {\r\n            if(evt.target.classList.contains('info__select__label')) {\r\n                infoSelectChoice.textContent = evt.target.textContent;\r\n                infoSelect.setAttribute('data-state', '');\r\n            }\r\n        });\r\n\r\n        infoSelectContent.addEventListener('keydown', (evt) => {\r\n            if(evt.code === 'Enter' && evt.target.classList.contains('info__select__label')) {\r\n                infoSelectChoice.textContent = evt.target.textContent;\r\n            }\r\n        });\r\n    }\r\n\r\n    infoSelect.addEventListener('click', selectToggleTitle);\r\n    infoSelect.addEventListener('keydown', (evt) => {\r\n        if (evt.code === 'Enter') {\r\n            selectToggleTitle();\r\n        }\r\n    });\r\n\r\n    renderSelectCities();\r\n    closeSelectToggle();\r\n}\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/info/info__select/info__select.js?");

/***/ }),

/***/ "./blocks/main/main.js":
/*!*****************************!*\
  !*** ./blocks/main/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popupReg\": () => /* binding */ popupReg\n/* harmony export */ });\n/* harmony import */ var _cost_cost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cost/cost */ \"./blocks/cost/cost.js\");\n/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer */ \"./blocks/footer/footer.js\");\n/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ \"./blocks/format/format.js\");\n/* harmony import */ var _info_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/info */ \"./blocks/info/info.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst popupReg = document.querySelector('.popup-reg');\r\nconst closePopupBtn = popupReg.querySelector('.popup-reg__close');\r\nconst useElements = popupReg.querySelectorAll('.outline-none');\r\nconst labels = popupReg.querySelectorAll('label');\r\n\r\nfunction closePopup() {\r\n    popupReg.style.display = 'none';\r\n}\r\n\r\nfunction removeOutline() {\r\n    useElements.forEach(item => {\r\n        item.addEventListener('mousedown', () => {\r\n            item.style.outline = 'none';\r\n        });\r\n    });\r\n}\r\n\r\nfunction activeElement() {\r\n    labels.forEach(label => {\r\n        label.addEventListener('keydown', (evt) => {\r\n            if (evt.code === 'Enter') {\r\n                const inp = popupReg.querySelector(`[id='${label.getAttribute('for')}']`);\r\n                if (inp.type === 'checkbox') {\r\n                    inp.toggleAttribute('checked');\r\n                } else if (inp.type === 'radio') {\r\n                    inp.setAttribute('checked', 'checked');\r\n                }\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nclosePopupBtn.addEventListener('click', closePopup);\r\nclosePopupBtn.addEventListener('keydown', (evt) => {\r\n    if (evt.code === 'Enter') {\r\n        closePopup();\r\n    }\r\n});\r\n\r\nremoveOutline();\r\nactiveElement();\r\n(0,_info_info__WEBPACK_IMPORTED_MODULE_3__.info)();\r\n(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.format)();\r\n(0,_cost_cost__WEBPACK_IMPORTED_MODULE_0__.substitutionValueRange)();\r\n(0,_footer_footer__WEBPACK_IMPORTED_MODULE_1__.popupFormSubmit)();\r\n\n\n//# sourceURL=webpack://pxlPro/./blocks/main/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./blocks/main/main.js");
/******/ })()
;