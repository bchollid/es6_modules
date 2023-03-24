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

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(make, model, year){\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/Car.js?");

/***/ }),

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\nclass Wishlist {\n    constructor(){\n        this.cars = [];\n    }\n    add(car){\n        this.cars.push(car)\n    }\n    remove(car){\n        let carToRemove = this.cars.indexOf(car);\n        this.cars.splice(carToRemove, 1);\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/Wishlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishlist.js */ \"./src/Wishlist.js\");\n/* harmony import */ var _Car_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car.js */ \"./src/Car.js\");\n\n\n\nlet wishlist = new _Wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//Selecting all input DOM elements.\nlet makeInput = document.getElementById(\"makeInput\");\nlet modelInput = document.getElementById(\"modelInput\")\nlet yearInput = document.getElementById(\"yearInput\");\n\n//Selecting the Details DOM elements.\nlet carMakePara = document.getElementById(\"car-make\");\nlet carModelPara = document.getElementById(\"car-model\")\nlet carYearPara = document.getElementById(\"car-year\");\n\n//Selecting buttons.\nlet removeButtonElements = document.getElementsByClassName(\"btn btn-warning removeBtn\");\nlet removeButton = removeButtonElements[0];\nlet addButton = document.getElementById(\"submitBtn\");\n\n//Selecting the wishlist container which we'll populated with info.\nlet wishList = document.getElementById(\"wishListContainer\");\n\n\naddButton.addEventListener(\"click\", function(e){\n    e.preventDefault();\n    let newCar = new _Car_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](makeInput.value, modelInput.value, yearInput.value);\n    addCar(newCar);\n    console.log(wishlist.cars)\n})\n\nremoveButton.addEventListener(\"click\", function(e){\n    e.preventDefault();\n    for(let i = 0; i<wishlist.cars.length; i++){\n        if(wishlist.cars[i].model == carModelPara.innerText && wishlist.cars[i].make == carMakePara.innerText){\n            removeCar(wishlist.cars[i]);\n        }\n    }\n    console.log(wishlist.cars)\n    carMakePara.innerText = \"\";\n    carModelPara.innerText = \"\";\n    carYearPara.innerText = \"\";\n})\n\nfunction showCarDetails(car){\n    carMakePara.innerText = car.make;\n    carModelPara.innerText = car.model;\n    carYearPara.innerText = car.year;\n    removeButton.disabled = false;\n}\n\nfunction updateDOMList(){\n    let allElements = document.querySelectorAll(\"li\");\n    allElements.forEach((item) => {\n        item.remove();\n    })\n        for(let i = 0; i<wishlist.cars.length; i++){\n                let newLI = document.createElement(\"li\");\n                wishList.appendChild(newLI);\n                newLI.innerText = `${wishlist.cars[i].make} ${wishlist.cars[i].model}`\n                    newLI.addEventListener(\"click\", function() {\n                        showCarDetails(wishlist.cars[i]);\n                    })\n        }\n};\n\nfunction addCar(newCar){\n    wishlist.add(newCar);\n    updateDOMList();\n}\n\nfunction removeCar(newCar){\n    wishlist.remove(newCar);\n    updateDOMList();\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;